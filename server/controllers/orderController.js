const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  const {
    userID,
    Name,
    Address,
    Email,
    PhoneNumber,
    DeliveryMethod,
    Items,
    TotalPrice,
  } = req.body;

  try {
    const order = await Order.create({
      userID,
      Name,
      Address,
      Email,
      PhoneNumber,
      DeliveryMethod,
      Items,
      TotalPrice,
    });

    res.status(200).json({ order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
};
