const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// static signup method
userSchema.statics.signup = async function (
  name,
  surname,
  email,
  password,
  admin
) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email alreay in use");
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

module.exports = mongoose.model("User", userSchema);
