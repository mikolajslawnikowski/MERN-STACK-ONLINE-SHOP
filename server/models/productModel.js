const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    // shipping1: { type: Boolean, required: true },
    // shipping2: { type: Boolean, required: true },
    // added: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
