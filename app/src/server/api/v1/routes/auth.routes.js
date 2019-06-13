import { AuthController } from '../controller';

// instantiate AuthController
const authController = new AuthController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/login/local:
     *   post:
     *     tags:
     *       - Login
     *     description: Login using JWT local strategy
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: A JWT Local strategy login object
     */
    parentRouter.post('/login/local', (req, res, next) => authController.loginLocal(authService, req, res, next));
};

export default initializeEndpoints;
