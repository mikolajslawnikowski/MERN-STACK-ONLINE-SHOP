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

// GET all MEN products sorted by rating in ascending order
const getMenProductsRatingAsc = async (req, res) => {
  try {
    const products = await Product.find({
      gender: "male",
    }).sort({ rating: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN products sorted by rating in descending order
const getMenProductsRatingDesc = async (req, res) => {
  try {
    const products = await Product.find({
      gender: "male",
    }).sort({ rating: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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

// T-shirts
const getMenTshirtsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "tshirts",
  }).sort({ rating: 1 });
  res.json(products);
};

const getMenTshirtsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "tshirts",
  }).sort({ rating: -1 });
  res.json(products);
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

// Hoodies
const getMenHoodiesRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "hoodies",
  }).sort({ rating: 1 });
  res.json(products);
};

const getMenHoodiesRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "hoodies",
  }).sort({ rating: -1 });
  res.json(products);
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

// Jackets
const getMenJacketsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "jackets",
  }).sort({ rating: 1 });
  res.json(products);
};

const getMenJacketsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "jackets",
  }).sort({ rating: -1 });
  res.json(products);
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

// Pants
const getMenPantsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "pants",
  }).sort({ rating: 1 });
  res.json(products);
};

const getMenPantsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "pants",
  }).sort({ rating: -1 });
  res.json(products);
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

// Shoes
const getMenShoesRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "shoes",
  }).sort({ rating: 1 });
  res.json(products);
};

const getMenShoesRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "male",
    category: "shoes",
  }).sort({ rating: -1 });
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

// GET all MEN products sorted by rating in ascending order
const getWomenProductsRatingAsc = async (req, res) => {
  try {
    const products = await Product.find({
      gender: "female",
    }).sort({ rating: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all MEN products sorted by rating in descending order
const getWomenProductsRatingDesc = async (req, res) => {
  try {
    const products = await Product.find({
      gender: "female",
    }).sort({ rating: -1 });
    res.json(products);
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

// T-shirts
const getWomenTshirtsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "tshirts",
  }).sort({ rating: 1 });
  res.json(products);
};

const getWomenTshirtsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "tshirts",
  }).sort({ rating: -1 });
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

// Hoodies
const getWomenHoodiesRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "hoodies",
  }).sort({ rating: 1 });
  res.json(products);
};

const getWomenHoodiesRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "hoodies",
  }).sort({ rating: -1 });
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

// Jackets
const getWomenJacketsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "jackets",
  }).sort({ rating: 1 });
  res.json(products);
};

const getWomenJacketsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "jackets",
  }).sort({ rating: -1 });
  res.json(products);
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

// Pants
const getWomenPantsRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "pants",
  }).sort({ rating: 1 });
  res.json(products);
};

const getWomenPantsRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "pants",
  }).sort({ rating: -1 });
  res.json(products);
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

// Shoes
const getWomenShoesRatingAsc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "shoes",
  }).sort({ rating: 1 });
  res.json(products);
};

const getWomenShoesRatingDesc = async (req, res) => {
  const products = await Product.find({
    gender: "female",
    category: "shoes",
  }).sort({ rating: -1 });
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
    shipping1,
    shipping2,
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
      shipping1,
      shipping2,
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

const getProductRating = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({ rating: product.rating });
};

module.exports = {
  getProducts,
  getMenProducts,
  getMenProductsPriceAsc,
  getMenProductsPriceDesc,
  getMenProductsDateAsc,
  getMenProductsDateDesc,
  getMenProductsRatingAsc,
  getMenProductsRatingDesc,
  getMenTshirts,
  getMenTshirtsPriceAsc,
  getMenTshirtsPriceDesc,
  getMenTshirtsDateAsc,
  getMenTshirtsDateDesc,
  getMenTshirtsRatingAsc,
  getMenTshirtsRatingDesc,
  getMenHoodies,
  getMenHoodiesPriceAsc,
  getMenHoodiesPriceDesc,
  getMenHoodiesDateAsc,
  getMenHoodiesDateDesc,
  getMenHoodiesRatingAsc,
  getMenHoodiesRatingDesc,
  getMenJackets,
  getMenJacketsPriceAsc,
  getMenJacketsPriceDesc,
  getMenJacketsDateAsc,
  getMenJacketsDateDesc,
  getMenJacketsRatingAsc,
  getMenJacketsRatingDesc,
  getMenPants,
  getMenPantsPriceAsc,
  getMenPantsPriceDesc,
  getMenPantsDateAsc,
  getMenPantsDateDesc,
  getMenPantsRatingAsc,
  getMenPantsRatingDesc,
  getMenShoes,
  getMenShoesPriceAsc,
  getMenShoesPriceDesc,
  getMenShoesDateAsc,
  getMenShoesDateDesc,
  getMenShoesRatingAsc,
  getMenShoesRatingDesc,
  getWomenProducts,
  getWomenProductsPriceAsc,
  getWomenProductsPriceDesc,
  getWomenProductsDateAsc,
  getWomenProductsDateDesc,
  getWomenProductsRatingAsc,
  getWomenProductsRatingDesc,
  getWomenTshirts,
  getWomenTshirtsPriceAsc,
  getWomenTshirtsPriceDesc,
  getWomenTshirtsDateAsc,
  getWomenTshirtsDateDesc,
  getWomenTshirtsRatingAsc,
  getWomenTshirtsRatingDesc,
  getWomenHoodies,
  getWomenHoodiesPriceAsc,
  getWomenHoodiesPriceDesc,
  getWomenHoodiesDateAsc,
  getWomenHoodiesDateDesc,
  getWomenHoodiesRatingAsc,
  getWomenHoodiesRatingDesc,
  getWomenJackets,
  getWomenJacketsPriceAsc,
  getWomenJacketsPriceDesc,
  getWomenJacketsDateAsc,
  getWomenJacketsDateDesc,
  getWomenJacketsRatingAsc,
  getWomenJacketsRatingDesc,
  getWomenPants,
  getWomenPantsPriceAsc,
  getWomenPantsPriceDesc,
  getWomenPantsDateAsc,
  getWomenPantsDateDesc,
  getWomenPantsRatingAsc,
  getWomenPantsRatingDesc,
  getWomenShoes,
  getWomenShoesPriceAsc,
  getWomenShoesPriceDesc,
  getWomenShoesDateAsc,
  getWomenShoesDateDesc,
  getWomenShoesRatingAsc,
  getWomenShoesRatingDesc,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductRating,
};
