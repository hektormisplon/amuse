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
    /**
     * @swagger
     * /api/v1/login/google:
     *   post:
     *     tags:
     *       - Login with Google
     *     description: Login using Google OAuth2
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Returns created or existing user
     */
    // TODO: create google login route
    // parentRouter.post('/login/google')
    /**
     * @swagger
     * /api/v1/login/facebook:
     *   post:
     *     tags:
     *       - Login with Facebook
     *     description: Login using Facebook OAuth2
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Returns created or existing user
     */
    // TODO: create google login route
    // parentRouter.post('/login/facebook')
};

export default initializeEndpoints;
