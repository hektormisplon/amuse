import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const BadgeSchema = new Schema(
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

BadgeSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

BadgeSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

BadgeSchema.virtual('id').get(function () { return this._id; });
BadgeSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

BadgeSchema.plugin(mongoosePaginate);

export default mongoose.model('Bagdge', BadgeSchema);