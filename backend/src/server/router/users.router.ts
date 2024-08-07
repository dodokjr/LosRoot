import { Router } from 'express';
import { user } from '../controller/users.controller';
const UsersRouter = Router();
// specifies the endpoint and the method to call
UsersRouter.get('/', user);
// export the router
export default UsersRouter;