import * as controllers from './controllers/Imports';
import express from 'express';

const routes = express.Router();

routes.post('/estoques', controllers.EstoquesController.create);
routes.post('/login', controllers.LoginsController.create);

export default routes;
