import * as controllers from './controllers/Imports';
import express from 'express';
import 'reflect-metadata';

const routes = express.Router();
routes.post('/estoques',controllers.EstoquesController.create)
routes.get('/estoques',controllers.EstoquesController.index)

routes.post('/movimentarEstoque', controllers.StocksMovementsController.create)
routes.get('/movimentarEstoque', controllers.StocksMovementsController.index)


export default routes;
