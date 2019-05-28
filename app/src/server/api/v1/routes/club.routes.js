/*
Import the internal libraries:
- ClubController
*/
import { ClubController } from '../controller';

// Create instance of ClubController otherwise you can't use it
const clubController = new ClubController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/clubs:
     *   get:
     *     tags:
     *       - Clubs
     *     description: Returns all clubs
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of clubs
     */
    parentRouter.get('/clubs', clubController.index);
    /**
     * @swagger
     * /api/v1/clubs/create:
     *   get:
     *     tags:
     *       - Club
     *     description: Returns specific viewmodel such as clubs
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create post
     */
    parentRouter.get('/clubs/create/', clubController.create);
    /**
     * @swagger
     * /api/v1/clubs/{id}:
     *   get:
     *     tags:
     *       - Club
     *     description: Returns specific post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Club id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get post by id
     */
    parentRouter.get('/clubs/:id', clubController.show);
    /**
     * @swagger
     * /api/v1/clubs:
     *   post:
     *     tags:
     *       - Club
     *     description: Save post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: post
     *         description: Club object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved post
     */
    parentRouter.post('/clubs', clubController.store);
    /**
     * @swagger
     * /api/v1/clubs/{id}/edit:
     *   get:
     *     tags:
     *       - Club
     *     description: Returns specific viewmodel such as post, clubs
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Club id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit blog by id
     */
    parentRouter.get('/clubs/:id/edit', clubController.edit);
    /**
     * @swagger
     * /api/v1/clubs/{id}:
     *   put:
     *     tags:
     *       - Club
     *     description: Update specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Club id
     *         in: path
     *         required: true
     *         type: string
     *       - name: nlog object
     *         description: blog data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update blog
     */
    parentRouter.put('/clubs/:id', clubController.update);
    /**
     * @swagger
     * /api/v1/clubs/{id}:
     *   delete:
     *     tags:
     *       - Club
     *     description: Delete specific blog
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Club id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete blog
     */
    parentRouter.delete('/clubs/:id', clubController.destroy);
};

export default initializeEndpoints;
