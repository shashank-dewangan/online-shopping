import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';

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
        token: null,
      })
      .status(200);
  } else {
    res.status(401);
    throw new Error(`Entered user or password is invalid`);
  }
});
