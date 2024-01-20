const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userID: { type: String, required: false },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Email: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    DeliveryMethod: { type: String, required: true },
    Items: { type: Array, required: true },
    TotalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
