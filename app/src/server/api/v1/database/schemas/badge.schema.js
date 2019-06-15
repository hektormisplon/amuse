import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const BadgeSchema = new Schema(
    {
        title: { type: String, required: true, max: 128 },
        type: { type: String, required: true, max: 64 },
        description: { type: String, required: false, max: 256 },
        amount: { type: Number, required: false },
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

BadgeSchema.virtual('id').get(function () {
    return this._id;
});
BadgeSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

BadgeSchema.plugin(mongoosePaginate);

export default mongoose.model('Bagdge', BadgeSchema);
