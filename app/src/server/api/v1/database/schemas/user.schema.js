/*
Import external libraries:
- config
*/
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

/*
Constants
*/
const { Schema } = mongoose;
const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        },
        localProvider: {
            password: {
                type: String,
                required: false,
            },
        },
        facebookProvider: {
            id: { type: String, required: false },
            token: { type: String, required: false },
        },
        googleProvider: {
            id: { type: String, required: false },
            token: { type: String, required: false },
        },
        badges: { type: Array, required: false },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

UserSchema.methods.slugify = function () {
    this.slug = slug(this.email);
};

UserSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('localProvider.password')) return next(); // only hash the password if it has been modified (or is new)
    try {
        return bcrypt.hash(user.localProvider.password, 10, (err, hash) => {
            if (err) throw err;
            user.localProvider.password = hash;
            return next();
        });
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    const user = this;
    bcrypt.compare(candidatePassword, user.localProvider.password, (err, isMatch) => {
        if (err) {
            return cb(err, null);
        }
        return cb(isMatch);
    });
};

UserSchema.virtual('id').get(function () {
    return this._id;
});

UserSchema.plugin(mongoosePaginate);
export default mongoose.model('User', UserSchema);
