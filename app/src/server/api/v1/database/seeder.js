/*
Import the external libraries:
- faker
*/
import faker from 'faker';

/*
Import the internal libraries:
- logger
- Blog
- Category
- Post
- Museum
- User
*/
import { logger } from '../../../utilities';
import { Blog, Category, Post, Museum, User } from './schemas';

class Seeder {
    constructor() {
        this.blogs = [];
        this.categories = [];
        this.posts = [];
        this.musea = [];
        this.users = [];
    }

    blogCreate = async (title, description) => {
        const blogDetail = {
            title,
            description,
            categoryId: this.getRandomCategory(),
            posts: this.getRandomPosts(),
        };
        const blog = new Blog(blogDetail);

        try {
            const newblog = await blog.save();
            this.blogs.push(newblog);

            logger.log({ level: 'info', message: `Blog created with id: ${newblog.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a blog: ${err}!` });
        }
    }

    categoryCreate = async (name, description) => {
        const categoryDetail = {
            name,
            description,
        };
        const category = new Category(categoryDetail);

        try {
            const newCategory = await category.save();

            this.categories.push(newCategory);

            logger.log({ level: 'info', message: `Category created with id: ${newCategory.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a category: ${err}!` });
        }
    }

    postCreate = async (title, synopsis, body) => {
        const postDetail = {
            title,
            synopsis,
            body,
            categoryId: this.getRandomCategory(),
        };
        const post = new Post(postDetail);

        try {
            const newPost = await post.save();
            this.posts.push(newPost);

            logger.log({ level: 'info', message: `Post created with id: ${newPost.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a post: ${err}!` });
        }
    }

    userCreate = async (email, password) => {
        const userDetail = {
            email,
            localProvider: {
                password,
            },
        };
        const user = new User(userDetail);

        try {
            const newUser = await user.save();
            this.posts.push(newUser);

            logger.log({ level: 'info', message: `User created with id: ${newUser.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a user: ${err}!` });
        }
    }

    museumCreate = async (shortName, name, coords) => {
        const museumDetail = {
            shortName,
            name,
            coords,
        };
        const museum = new Museum(museumDetail);

        try {
            const newMuseum = await museum.save();
            this.musea.push(newMuseum);

            logger.log({ level: 'info', message: `Museum created with id: ${newMuseum.id}!` });
        } catch(err) {
            logger.log({ level: 'info', message: `An error occurred when creating a museum: ${err}!` });
        }
    }

    createBlogs = async () => {
        await Promise.all([
            (async () => this.blogCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
        ]);
    }

    createCategories = async () => {
        await Promise.all([
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
            (async () => this.categoryCreate(faker.lorem.word(), faker.lorem.sentence()))(),
        ]);
    }

    createPosts = async () => {
        await Promise.all([
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
            (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
        ]);
    }

    createMusea = async () => {
        await Promise.all([
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.sentence(), [{lng: 0, lat: 0}]))(),
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.sentence(), [{lng: 0, lat: 0}]))(),
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.sentence(), [{lng: 0, lat: 0}]))(),
            (async () => this.museumCreate(faker.lorem.sentence(), faker.lorem.sentence(), [{lng: 0, lat: 0}]))(),
        ]);
    }

    createUsers = async () => {
        await Promise.all([
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
            (async () => this.userCreate(faker.internet.email(), 'wicked4u'))(),
        ]);
    }
    
    
    getRandomCategory = () => {
        let category = null;
        if (this.categories && this.categories.length > 0) {
            category = this.categories[Math.round(Math.random() * (this.categories.length - 1))];
        }
        return category;
    }

    getRandomPosts = () => {
        let cPosts = null;
        if (this.posts && this.posts.length > 0) {
            const nPosts = Math.round(Math.random() * (this.posts.length - 1));
            cPosts = this.posts.slice(0, this.posts.length);
            while (cPosts.length > nPosts) {
                cPosts.splice(Math.round(Math.random() * (this.posts.length - 1)), 1);
            }
        }
        return cPosts;
    }

    seed = async () => {
        this.categories = await Category.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createCategories();
            }
            return Category.find().exec();
        });

        this.posts = await Post.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createPosts();
            }
            return Post.find().exec();
        });

        this.blogs = await Blog.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createBlogs();
            }
            return Blog.find().exec();
        });
        
        this.musea = await Museum.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createMusea();
            }
            return Museum.find().exec();
        });

        this.users = await User.estimatedDocumentCount().exec().then(async (count) => {
            if (count === 0) {
                await this.createUsers();
            }
            return User.find().exec();
        });
        
    }
}
export default Seeder;
