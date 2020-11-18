import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.split(' ')[1]) {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    }
  } catch (error) {
    res.status(401);
    throw new Error('Invalid Token');
  }

  if (!token) {
    res.status(401);
    throw new Error('User is not authorized');
  }
});
