const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "1h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    const user = await User.signup(name, surname, email, password);

    const token = createToken(user._id);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const infoUser = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const _id = jwt.verify(token, process.env.SECRET);

    const user = await User.findOne({ _id });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

// const changeEmail = async (req, res) => {
//   const { _id, newEmail } = req.body;

//   try {
//     const user = await User.findOne({ _id });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     user.email = newEmail;
//     await user.save();

//     res.status(200).json({ message: "Email updated successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const changePassword = async (req, res) => {
//   const { _id, newPassword } = req.body;

//   try {
//     const user = await User.findOne({ _id });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     user.password = newPassword;
//     await user.save();

//     res.status(200).json({ message: "Password updated successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  loginUser,
  signupUser,
  infoUser,
  // changeEmail,
  // changePassword,
};
