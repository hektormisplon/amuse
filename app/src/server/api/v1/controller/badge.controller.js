import { APIError, handleAPIError } from '../../../utilities';
import { Badge } from '../database';

class BadgeController {
    // List all models
    index = async (req, res, next) => {
        try {
            const badges = await Badge.find()
                .populate('__category')
                .sort({ created_at: -1 })
                .exec();
            if (badges === undefined || badges === null) {
                throw new APIError(404, 'Collection for badges not found');
            }
            return res.status(200).json(badges);
        } catch (err) {
            return handleAPIError(500, err.message || 'Could not list badges', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Badge.findById(id)
                .populate('__category')
                .populate('__posts')
                .exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Badge with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Could not show badges', next);
        }
    };

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            badges: [],
        };
        return res.status(200).json(vm);
    };

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const categoryCreate = new Badge({
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                amount: req.body.amount,
            });
            const badge = await categoryCreate.save();
            return res.status(201).json(badge);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Could not store badge', next);
        }
    };

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;
        try {
            const badge = await Badge.findById(id).exec();

            if (!badge) {
                throw new APIError(404, `Badge with id: ${id} not found`);
            } else {
                const vm = {
                    badge,
                    badges: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Could not edit badge (id: ${id})`,
                next,
            );
        }
    };

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;
        try {
            const categoryUpdate = req.body;
            const badge = await Badge.findOneAndUpdate({ _id: id }, categoryUpdate, {
                new: true,
            }).exec();
            if (!badge) {
                throw new APIError(404, `Badge with id: ${id} not found`);
            }
            return res.status(200).json(badge);
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Could not update badge (id: ${id})`,
                next,
            );
        }
    };

    // Delete / Destroy model
    destroy = async (req, res, next) => {
        const { id } = req.params;
        try {
            const badge = await Badge.findOneAndRemove({ _id: id });
            if (!badge) {
                throw new APIError(404, `Badge with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Deleted badge (id: ${id})` });
            }
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Could not delete badge (id: ${id})`,
                next,
            );
        }
    };
}

export default BadgeController;
