const asyncHandler = require("express-async-handler");

// @desc    register a new user
// @route   /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("please include all fields");
  }
});

// @desc    login a users
// @route   /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  res.send("login route works");
});

module.exports = {
  registerUser,
  loginUser,
};
