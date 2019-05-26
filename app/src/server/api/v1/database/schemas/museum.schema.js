import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const MuseumSchema = new Schema(
    {
        shortName: {type:String, required: false, max: 128},
        name: { type: String, required: true, max: 256 },
        coords: { type: [{
            lng: { type: Number },
            lat: { type: Number },
        }]},
        slug: {
            type: String, lowercase: true, unique: true, required: true
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

MuseumSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

MuseumSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

MuseumSchema.virtual('id').get(function () { return this._id; });
MuseumSchema.virtual('category', {
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true,
});

MuseumSchema.plugin(mongoosePaginate);

// 3rd parameter to explicitly name database plural (otherwise mongodb adds 's')
export default mongoose.model('Museum', MuseumSchema, 'musea');