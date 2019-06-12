import { AuthController } from '../controller';

// instantiate AuthController
const authController = new AuthController();

const initializeEndpoints = (parentRouter, authService) => {
    parentRouter.post('/login/local', (req, res, next) => authController.loginLocal(authService, req, res, next));
};

export default initializeEndpoints;
