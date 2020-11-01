import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/product.model.js';

const routes = express();

routes.get(
  '/',
  asyncHandler(async (req, res) => {
    const response = await Product.find({});
    if (response) res.json(response).status(200);
    else {
      res.status(404);
      throw new Error('error in loading products');
    }
  })
);

routes.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.status(200).json(product);
    else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default routes;
