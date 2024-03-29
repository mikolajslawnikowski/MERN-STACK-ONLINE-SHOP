const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  admin: Boolean,
});

userSchema.statics.signup = async function (
  name,
  surname,
  email,
  password,
  admin
) {
  if (!name || !surname || !email || !password) {
    throw Error("You have to properly fill in all the fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    surname,
    email,
    password: hash,
    admin: "false",
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("You have to properly fill in all the fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

// userSchema.statics.changeEmail = async function (_id, currentEmail, newEmail) {
//   const user = await this.findOne({ _id });

//   if (!user) {
//     throw Error("User not found");
//   }

//   if (user.email !== currentEmail) {
//     throw Error("Current email is incorrect");
//   }

//   user.email = newEmail;
//   await user.save();

//   return user;
// };

// userSchema.statics.changePassword = async function (
//   _id,
//   currentPassword,
//   newPassword
// ) {
//   const user = await this.findOne({ _id });

//   if (!user) {
//     throw Error("User not found");
//   }

//   const match = await bcrypt.compare(currentPassword, user.password);

//   if (!match) {
//     throw Error("Current password is incorrect");
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(newPassword, salt);

//   user.password = hash;
//   await user.save();

//   return user;
// };

module.exports = mongoose.model("User", userSchema);
