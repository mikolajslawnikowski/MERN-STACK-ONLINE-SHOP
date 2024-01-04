const User = require("../models/userModel");

// login user
const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

// signup user
const signupUser = async (req, res) => {
  const { name, surname, email, password, admin } = req.body;

  try {
    const user = await User.signup(name, surname, email, password, admin);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
