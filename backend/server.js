import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';

const app = express();
dotenv.config();
db.connectDB();

app.get('/', (req, res) => {
  res.status(200).send('in home page');
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port : ${process.env.PORT}`);
});
