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

// GET all MEN products sorted by price in ascending order
const getMenProductsPriceAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN products sorted by price in descending order
const getMenProductsPriceDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

// GET all MEN products sorted by date in ascending order
const getMenProductsDateAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
  }).sort({ createdAt: 1 });
  res.json(products);
};

// GET all MEN products sorted by date in descending order
const getMenProductsDateDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
  }).sort({ createdAt: -1 });
  res.json(products);
};

// GET all MEN tshirts
const getMenTshirts = async (req, res) => {
  const products = await Product.find({ category: "tshirts", gender: "male" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getMenTshirtsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getMenTshirtsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

const getMenTshirtsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "tshirts",
      gender: "male",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenTshirtsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "tshirts",
      gender: "male",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN hoodies
const getMenHoodies = async (req, res) => {
  const products = await Product.find({ category: "hoodies", gender: "male" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getMenHoodiesPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getMenHoodiesPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

const getMenHoodiesDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "hoodies",
      gender: "male",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenHoodiesDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "hoodies",
      gender: "male",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN jackets
const getMenJackets = async (req, res) => {
  const products = await Product.find({ category: "jackets", gender: "male" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getMenJacketsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getMenJacketsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

const getMenJacketsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "jackets",
      gender: "male",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenJacketsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "jackets",
      gender: "male",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN pants
const getMenPants = async (req, res) => {
  const products = await Product.find({ category: "pants", gender: "male" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getMenPantsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "pants",
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getMenPantsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "pants",
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

const getMenPantsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "pants",
      gender: "male",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenPantsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "pants",
      gender: "male",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN shoes
const getMenShoes = async (req, res) => {
  const products = await Product.find({ category: "shoes", gender: "male" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getMenShoesPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "shoes",
    gender: "male",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getMenShoesPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "shoes",
    gender: "male",
  }).sort({ price: -1 });
  res.json(products);
};

const getMenShoesDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "shoes",
      gender: "male",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenShoesDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "shoes",
      gender: "male",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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

// GET all MEN products sorted by price in ascending order
const getWomenProductsPriceAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN products sorted by price in descending order
const getWomenProductsPriceDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

// GET all MEN products sorted by date in ascending order
const getWomenProductsDateAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
  }).sort({ createdAt: 1 });
  res.json(products);
};

// GET all MEN products sorted by date in descending order
const getWomenProductsDateDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
  }).sort({ createdAt: -1 });
  res.json(products);
};

// GET all WOMEN tshirts
const getWomenTshirts = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "female",
  });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getWomenTshirtsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getWomenTshirtsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "tshirts",
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

const getWomenTshirtsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "tshirts",
      gender: "female",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWomenTshirtsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "tshirts",
      gender: "female",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all WOMEN hoodies
const getWomenHoodies = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "female",
  });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getWomenHoodiesPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getWomenHoodiesPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "hoodies",
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

const getWomenHoodiesDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "hoodies",
      gender: "female",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWomenHoodiesDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "hoodies",
      gender: "female",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all WOMEN jackets
const getWomenJackets = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "female",
  });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getWomenJacketsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getWomenJacketsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "jackets",
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

const getWomenJacketsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "jackets",
      gender: "female",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWomenJacketsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "jackets",
      gender: "female",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all WOMEN pants
const getWomenPants = async (req, res) => {
  const products = await Product.find({ category: "pants", gender: "female" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getWomenPantsPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "pants",
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getWomenPantsPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "pants",
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

const getWomenPantsDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "pants",
      gender: "female",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWomenPantsDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "pants",
      gender: "female",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all WOMEN shoes
const getWomenShoes = async (req, res) => {
  const products = await Product.find({ category: "shoes", gender: "female" });
  res.json(products);
};

// GET all MEN tshirts sorted by price in ascending order
const getWomenShoesPriceAsc = async (req, res) => {
  const products = await Product.find({
    category: "shoes",
    gender: "female",
  }).sort({ price: 1 });
  res.json(products);
};

// GET all MEN tshirts sorted by price in descending order
const getWomenShoesPriceDesc = async (req, res) => {
  const products = await Product.find({
    category: "shoes",
    gender: "female",
  }).sort({ price: -1 });
  res.json(products);
};

const getWomenShoesDateAsc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "shoes",
      gender: "female",
    }).sort({ createdAt: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWomenShoesDateDesc = async (req, res) => {
  try {
    const products = await Product.find({
      category: "shoes",
      gender: "female",
    }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
  getMenProductsPriceAsc,
  getMenProductsPriceDesc,
  getMenProductsDateAsc,
  getMenProductsDateDesc,
  getMenTshirts,
  getMenTshirtsPriceAsc,
  getMenTshirtsPriceDesc,
  getMenTshirtsDateAsc,
  getMenTshirtsDateDesc,
  getMenHoodies,
  getMenHoodiesPriceAsc,
  getMenHoodiesPriceDesc,
  getMenHoodiesDateAsc,
  getMenHoodiesDateDesc,
  getMenJackets,
  getMenJacketsPriceAsc,
  getMenJacketsPriceDesc,
  getMenJacketsDateAsc,
  getMenJacketsDateDesc,
  getMenPants,
  getMenPantsPriceAsc,
  getMenPantsPriceDesc,
  getMenPantsDateAsc,
  getMenPantsDateDesc,
  getMenShoes,
  getMenShoesPriceAsc,
  getMenShoesPriceDesc,
  getMenShoesDateAsc,
  getMenShoesDateDesc,
  getWomenProducts,
  getWomenProductsPriceAsc,
  getWomenProductsPriceDesc,
  getWomenProductsDateAsc,
  getWomenProductsDateDesc,
  getWomenTshirts,
  getWomenTshirtsPriceAsc,
  getWomenTshirtsPriceDesc,
  getWomenTshirtsDateAsc,
  getWomenTshirtsDateDesc,
  getWomenHoodies,
  getWomenHoodiesPriceAsc,
  getWomenHoodiesPriceDesc,
  getWomenHoodiesDateAsc,
  getWomenHoodiesDateDesc,
  getWomenJackets,
  getWomenJacketsPriceAsc,
  getWomenJacketsPriceDesc,
  getWomenJacketsDateAsc,
  getWomenJacketsDateDesc,
  getWomenPants,
  getWomenPantsPriceAsc,
  getWomenPantsPriceDesc,
  getWomenPantsDateAsc,
  getWomenPantsDateDesc,
  getWomenShoes,
  getWomenShoesPriceAsc,
  getWomenShoesPriceDesc,
  getWomenShoesDateAsc,
  getWomenShoesDateDesc,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
