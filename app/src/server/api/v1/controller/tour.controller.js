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
import { Tour } from '../database';

class MuseumController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let tours = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    populate: 'category',
                    sort: { created_at: -1 },
                };
                tours = await Tour.paginate({}, options);
            } else {
                tours = await Tour.find()
                    .populate('category')
                    .sort({ created_at: -1 })
                    .exec();
            }

            if (tours === undefined || tours === null) {
                throw new APIError(404, 'Collection for tours not found!');
            }
            return res.status(200).json(tours);
        } catch (err) {
            return handleAPIError(
                500,
                err.message || 'Some error occurred while retrieving tours',
                next,
            );
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Tour.findById(id)
                .populate('category')
                .exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Tour with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || 'Some error occurred while retrieving tours',
                next,
            );
        }
    };

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            categories: [],
        };
        return res.status(200).json(vm);
    };

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const museumCreate = new Tour({
                title: req.body.title,
                body: req.body.body,
                categoryId: req.body.categoryId,
                waypoints: req.body.waypoints,
            });
            const tour = await museumCreate.save();
            return res.status(201).json(tour);
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || 'Some error occurred while saving the Tour!',
                next,
            );
        }
    };

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;
        try {
            const tour = await Tour.findById(id).exec();

            if (!tour) {
                throw new APIError(404, `Tour with id: ${id} not found!`);
            } else {
                const vm = {
                    tour,
                    categories: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Some error occurred while deleting the Tour with id: ${id}!`,
                next,
            );
        }
    };

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;
        try {
            const museumUpdate = req.body;
            const tour = await Tour.findOneAndUpdate({ _id: id }, museumUpdate, {
                new: true,
            }).exec();

            if (!tour) {
                throw new APIError(404, `Tour with id: ${id} not found!`);
            }
            return res.status(200).json(tour);
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Some error occurred while deleting the Tour with id: ${id}!`,
                next,
            );
        }
    };

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let tour = null;

            let { mode } = req.query;
            if (mode) {
                tour = await Tour.findByIdAndUpdate(
                    { _id: id },
                    { deleted_at: mode === 'softdelete' ? Date.now() : null },
                    { new: true },
                );
            } else {
                mode = 'delete';
                tour = await Tour.findOneAndRemove({ _id: id });
            }

            if (!tour) {
                throw new APIError(404, `Tour with id: ${id} not found!`);
            } else {
                return res
                    .status(200)
                    .json({ message: `Successful deleted the Tour with id: ${id}!`, tour, mode });
            }
        } catch (err) {
            return handleAPIError(
                err.status || 500,
                err.message || `Some error occurred while deleting the Musem with id: ${id}!`,
                next,
            );
        }
    };
}

export default MuseumController;
