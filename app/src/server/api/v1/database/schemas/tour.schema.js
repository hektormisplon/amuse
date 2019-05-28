import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const TourSchema = new Schema(
    {
        title: {type:String, required: true, max: 128},
        museum: {type:String, required: false}, // this should be the id of the correspondingmuseum
        body: { type: String, required: false },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

TourSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

TourSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

TourSchema.virtual('id').get(function () { return this._id; });
TourSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

TourSchema.plugin(mongoosePaginate);

export default mongoose.model('Tour', TourSchema);