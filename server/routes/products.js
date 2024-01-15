const express = require("express");
const {
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

router.get("/men/tshirts", getMenTshirts);
router.get("/men/hoodies", getMenHoodies);
router.get("/men/jackets", getMenJackets);
router.get("/men/pants", getMenPants);
router.get("/men/shoes", getMenShoes);

router.get("/women/tshirts", getWomenTshirts);
router.get("/women/hoodies", getWomenHoodies);
router.get("/women/jackets", getWomenJackets);
router.get("/women/pants", getWomenPants);
router.get("/women/shoes", getWomenShoes);

module.exports = router;
