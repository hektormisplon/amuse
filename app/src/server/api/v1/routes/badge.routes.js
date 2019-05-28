/*
Import the internal libraries:
- BadgeController
*/
import { BadgeController } from '../controller';

// Create instance of BadgeController otherwise you can't use it
const badgeController = new BadgeController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/badges:
     *   get:
     *     tags:
     *       - Badges
     *     description: Returns all badges
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of badges
     */
    parentRouter.get('/badges', badgeController.index);
    /**
     * @swagger
     * /api/v1/badges/create:
     *   get:
     *     tags:
     *       - Badge
     *     description: Returns specific viewmodel such as badges
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create post
     */
    parentRouter.get('/badges/create/', badgeController.create);
    /**
     * @swagger
     * /api/v1/badges/{id}:
     *   get:
     *     tags:
     *       - Badge
     *     description: Returns specific post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Badge id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get post by id
     */
    parentRouter.get('/badges/:id', badgeController.show);
    /**
     * @swagger
     * /api/v1/badges:
     *   post:
     *     tags:
     *       - Badge
     *     description: Save post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: post
     *         description: Badge object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved post
     */
    parentRouter.post('/badges', badgeController.store);
    /**
     * @swagger
     * /api/v1/badges/{id}/edit:
     *   get:
     *     tags:
     *       - Badge
     *     description: Returns specific viewmodel such as post, badges
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Badge id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit blog by id
     */
    parentRouter.get('/badges/:id/edit', badgeController.edit);
    /**
     * @swagger
     * /api/v1/badges/{id}:
     *   put:
     *     tags:
     *       - Badge
     *     description: Update specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Badge id
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
    parentRouter.put('/badges/:id', badgeController.update);
    /**
     * @swagger
     * /api/v1/badges/{id}:
     *   delete:
     *     tags:
     *       - Badge
     *     description: Delete specific blog
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Badge id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete blog
     */
    parentRouter.delete('/badges/:id', badgeController.destroy);
};

export default initializeEndpoints;
