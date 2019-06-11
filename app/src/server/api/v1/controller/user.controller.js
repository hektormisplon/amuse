/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { APIError, handleAPIError } from '../../../utilities';
import { User } from '../database';

class UserController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let users = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    populate: 'category',
                    sort: { created_at: -1 },
                };
                users = await User.paginate({}, options);
            } else {
                users = await User.find().populate('category').sort({ created_at: -1 }).exec();
            }

            if (users === undefined || users === null) {
                throw new APIError(404, 'Collection for users not found!');
            }
            return res.status(200).json(users);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving users', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await User.findById(id).populate('category').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `User with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving users', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            categories: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const userCreate = new User({
                username: req.body.username,
                email: req.body.email,
                localProvider: req.body.localProvider,
            });
            const user = await userCreate.save();
            return res.status(201).json(user);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the User!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const user = await User.findById(id).exec();

            if (!user) {
                throw new APIError(404, `User with id: ${id} not found!`);
            } else {
                const vm = {
                    user,
                    categories: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the User with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const userUpdate = req.body;
            const user = await User.findOneAndUpdate({ _id: id }, userUpdate, { new: true }).exec();

            if (!user) {
                throw new APIError(404, `User with id: ${id} not found!`);
            }
            return res.status(200).json(user);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the User with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let user = null;

            let { mode } = req.query;
            if (mode) {
                user = await User.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softdelete' ? Date.now() : null) }, { new: true });
            } else {
                mode = 'delete';
                user = await User.findOneAndRemove({ _id: id });
            }

            if (!user) {
                throw new APIError(404, `User with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the User with id: ${id}!`, user, mode });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the User with id: ${id}!`, next);
        }
    }
}

export default UserController;
