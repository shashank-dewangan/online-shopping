import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/product.controller.js';

const routes = express();

routes.get('/', getProducts);

routes.get('/:id', getProductById);

export default routes;
