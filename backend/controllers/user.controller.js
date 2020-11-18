import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import { generateToken } from '../utils/generateToken.js';

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
      .status(200);
  } else {
    res.status(401);
    throw new Error(`Entered user or password is invalid`);
  }
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
      .status(200);
  } else {
    res.status(401);
    throw new Error(`User Not Found`);
  }
});
