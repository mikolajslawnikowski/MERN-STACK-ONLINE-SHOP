const express = require("express");
const {
  getProducts,
  getMenProducts,
  getWomenProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
// const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all product routes
// router.use(requireAuth);

// GET all products
router.get("/", getProducts);

// GET all MEN products
router.get("/men", getMenProducts);

// GET all WOMEN products
router.get("/women", getWomenProducts);

// GET single product
router.get("/:id", getProduct);

// POST a new product
router.post("/", createProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

// UPDATE a product
router.patch("/:id", updateProduct);

module.exports = router;
