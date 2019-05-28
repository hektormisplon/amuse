import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const ClubSchema = new Schema(
    {
        title: { type: String, required: true, max: 256 },
        // slug: {
        //     type: String, lowercase: true, unique: true, required: true
        // },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

ClubSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

ClubSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

ClubSchema.virtual('id').get(function () { return this._id; });
ClubSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

ClubSchema.plugin(mongoosePaginate);

export default mongoose.model('Club', ClubSchema);