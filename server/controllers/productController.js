const Product = require("../models/productModel");
const mongoose = require("mongoose");

// GET all products
const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

// GET all MEN products
const getMenProducts = async (req, res) => {
  try {
    const menProducts = await Product.find({ gender: "male" });
    res.json(menProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN tshirts
const getMenTshirts = async (req, res) => {
  const products = await Product.find({ category: "tshirts", gender: "male" });
  res.json(products);
};

// GET all MEN hoodies
const getMenHoodies = async (req, res) => {
  const products = await Product.find({ category: "hoodies", gender: "male" });
  res.json(products);
};

// GET all MEN jackets
const getMenJackets = async (req, res) => {
  const products = await Product.find({ category: "jackets", gender: "male" });
  res.json(products);
};

// GET all MEN pants
const getMenPants = async (req, res) => {
  const products = await Product.find({ category: "pants", gender: "male" });
  res.json(products);
};

// GET all MEN shoes
const getMenShoes = async (req, res) => {
  const products = await Product.find({ category: "shoes", gender: "male" });
  res.json(products);
};

// GET all WOMEN products
const getWomenProducts = async (req, res) => {
  try {
    const womenProducts = await Product.find({ gender: "female" });
    res.json(womenProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all WOMEN tshirts
const getWomenTshirts = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "female",
  });
  res.json(products);
};

// GET all WOMEN hoodies
const getWomenHoodies = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "female",
  });
  res.json(products);
};

// GET all WOMEN jackets
const getWomenJackets = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "female",
  });
  res.json(products);
};

// GET all WOMEN pants
const getWomenPants = async (req, res) => {
  const products = await Product.find({ category: "pants", gender: "female" });
  res.json(products);
};

// GET all WOMEN shoes
const getWomenShoes = async (req, res) => {
  const products = await Product.find({ category: "shoes", gender: "female" });
  res.json(products);
};

// GET a single product
const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }
  const product = await Product.findById(id);
  if (!product) {
    res.status(404).json({ error: "No such product" });
  }
  res.status(200).json(product);
};

// CREATE new product
const createProduct = async (req, res) => {
  const {
    name,
    photo,
    price,
    gender,
    category,
    shortDescription,
    longDescription,
    quantity,
  } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!photo) {
    emptyFields.push("photo");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!gender) {
    emptyFields.push("gender");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!shortDescription) {
    emptyFields.push("shortDescription");
  }
  if (!longDescription) {
    emptyFields.push("longDescription");
  }
  if (!quantity) {
    emptyFields.push("quantity");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `You have to fill in all the fields`, emptyFields });
  }

  try {
    const product = await Product.create({
      name,
      photo,
      price,
      gender,
      category,
      shortDescription,
      longDescription,
      quantity,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

// UPDATE a product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return res.status(400).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getMenProducts,
  getMenTshirts,
  getMenHoodies,
  getMenJackets,
  getMenPants,
  getMenShoes,
  getWomenProducts,
  getWomenTshirts,
  getWomenHoodies,
  getWomenJackets,
  getWomenPants,
  getWomenShoes,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
