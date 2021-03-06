import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import {
  notFoundHandler,
  errorHandler,
} from './middleware/custom.middleware.js';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
dotenv.config();
db.connectDB();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`server is running at port : ${process.env.PORT}`);
});
