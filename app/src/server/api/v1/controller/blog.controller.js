import { Blog } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class BlogController {
    // List all models
    index = async (req, res, next) => {
        try {
            const blogs = await Blog.find().populate('__category').sort({ created_at: -1 }).exec();
            if (blogs === undefined || blogs === null) {
                throw new APIError(404, 'Collection for blogs not found');
            }
            return res.status(200).json(blogs);
        } catch (err) {
            return handleAPIError(500, err.message || 'Could not list blogs', next);
        }
    };
    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Blog.findById(id).populate('__category').populate('__posts').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Blog with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Could not show blogs', next);
        }
    }
    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            blogs: [],
        };
        return res.status(200).json(vm);
    }
    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const categoryCreate = new Blog({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
            });
            const blog = await categoryCreate.save();
            return res.status(201).json(blog);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Could not store blog', next);
        }
    }
    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const blog = await Blog.findById(id).exec();

            if (!blog) {
                throw new APIError(404, `Blog with id: ${id} not found`);
            } else {
                const vm = {
                    blog,
                    blogs: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Could not edit blog (id: ${id})`, next);
        }
    }
    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const categoryUpdate = req.body;
            const blog = await Blog.findOneAndUpdate({ _id: id }, categoryUpdate, { new: true }).exec();

            if (!blog) {
                throw new APIError(404, `Blog with id: ${id} not found`);
            }
            return res.status(200).json(blog);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Could not update blog (id: ${id})`, next);
        }
    }
    // Delete / Destroy model
    destroy = async (req, res, next) => {
        const { id } = req.params;
        try {
            const blog = await Blog.findOneAndRemove({ _id: id });

            if (!blog) {
                throw new APIError(404, `Blog with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Deleted blog (id: ${id})` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Could not delete blog (id: ${id})`, next);
        }
    }
}

export default BlogController;
