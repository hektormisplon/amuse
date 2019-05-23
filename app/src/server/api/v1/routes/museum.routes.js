/*
Import the internal libraries:
- MuseumController
*/
import { MuseumController } from '../controller';

// Create instance of MuseumController otherwise you can't use it
const museumController = new MuseumController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/musea:
     *   get:
     *     tags:
     *       - Musea
     *     description: Returns all musea
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of musea
     */
    parentRouter.get('/musea', museumController.index);
    /**
     * @swagger
     * /api/v1/musea/create:
     *   get:
     *     tags:
     *       - Musea
     *     description: Returns specific viewmodel such as categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create museum
     */
    parentRouter.get('/musea/create/', museumController.create);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   get:
     *     tags:
     *       - Musea
     *     description: Returns specific museum
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Museum id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get museum by id
     */
    parentRouter.get('/musea/:id', museumController.show);
    /**
     * @swagger
     * /api/v1/musea:
     *   museum:
     *     tags:
     *       - Musea
     *     description: Save museum
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: museum
     *         description: Museum object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved museum
     */
    parentRouter.post('/musea', museumController.store);
    /**
     * @swagger
     * /api/v1/musea/{id}/edit:
     *   get:
     *     tags:
     *       - Musea
     *     description: Returns specific viewmodel such as post, categories
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit post by id
     */
    parentRouter.get('/musea/:id/edit', museumController.edit);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   put:
     *     tags:
     *       - Musea
     *     description: Update specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *       - name: post object
     *         description: post data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update post
     */
    parentRouter.put('/musea/:id', museumController.update);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   delete:
     *     tags:
     *       - Musea
     *     description: Delete specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete post
     */
    parentRouter.delete('/musea/:id', museumController.destroy);
};

export default initializeEndpoints;
