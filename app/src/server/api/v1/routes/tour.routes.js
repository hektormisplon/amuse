/*
Import the internal libraries:
- tourController
*/
import { TourController } from '../controller';

// Create instance of tourController otherwise you can't use it
const tourController = new TourController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/tours:
     *   get:
     *     tags:
     *       - Tours
     *     description: Returns all tours
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of tours
     */
    parentRouter.get('/tours', tourController.index);
    /**
     * @swagger
     * /api/v1/tours/create:
     *   get:
     *     tags:
     *       - Tours
     *     description: Returns specific viewmodel such as categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create tour
     */
    parentRouter.get('/tours/create/', tourController.create);
    /**
     * @swagger
     * /api/v1/tours/{id}:
     *   get:
     *     tags:
     *       - Tours
     *     description: Returns specific tour
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: tour id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get tour by id
     */
    parentRouter.get('/tours/:id', tourController.show);
    /**
     * @swagger
     * /api/v1/tours:
     *   tour:
     *     tags:
     *       - Tours
     *     description: Save tour
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: tour
     *         description: tour object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved tour
     */
    parentRouter.post('/tours', tourController.store);
    /**
     * @swagger
     * /api/v1/tours/{id}/edit:
     *   get:
     *     tags:
     *       - Tours
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
    parentRouter.put('/tours/:id/edit', tourController.edit);
    /**
     * @swagger
     * /api/v1/tours/{id}:
     *   put:
     *     tags:
     *       - Tours
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
    parentRouter.put('/tours/:id', tourController.update);
    /**
     * @swagger
     * /api/v1/tours/{id}:
     *   delete:
     *     tags:
     *       - Tours
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
    parentRouter.delete('/tours/:id', tourController.destroy);
};

export default initializeEndpoints;
