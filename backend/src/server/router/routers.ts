import { Router } from 'express';
import UsersRouter from './users.router';
const routes = Router();
// define the base path and the router that's going to be called
routes.use('/users', UsersRouter);
// export the route
export default routes;