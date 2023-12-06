const User = require("../models/user");
const { createError } = require("../utils/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).json({
      msg: "user created",
    });
  } catch (error) {
    next(createError(500, error.message, res));
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(400, "user not found", res));
    }
    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      return next(createError(400, "Incorrect password", res));
    }
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $set: { isAdmin: true } },
      { new: true }
    );

    const token = jwt.sign(
      { id: user._id, isAdmin: updatedUser.isAdmin },
      process.env.JWT
    );

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({
        ...updatedUser._doc,
        password: undefined,
      });
  } catch (error) {
    next(createError(500, error.message, res));
  }
};

module.exports = {
  signup,
  login,
};
