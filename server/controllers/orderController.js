const Order = require("../models/orderModel");
const Product = require("../models/productModel");

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

  let emptyFields = [];

  if (!Name) {
    emptyFields.push("Name");
  }
  if (!Address) {
    emptyFields.push("Address");
  }
  if (!Email) {
    emptyFields.push("Email");
  }
  if (!PhoneNumber) {
    emptyFields.push("PhoneNumber");
  }
  if (!DeliveryMethod) {
    emptyFields.push("DeliveryMethod");
  }
  if (!Items || Items.length === 0) {
    emptyFields.push("Items");
  }
  if (!TotalPrice) {
    emptyFields.push("TotalPrice");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `You have to fill in all the fields`, emptyFields });
  }

  try {
    for (let item of Items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({ error: "Product not found" });
      }

      if (item.quantity > product.quantity) {
        return res.status(400).json({ error: "Not enough product in stock" });
      }

      if (item.price !== product.price) {
        return res.status(400).json({ error: "Product price does not match" });
      }
    }

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

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await Order.find({ userID: id.toString() });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
};
