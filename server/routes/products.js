const express = require("express");
const {
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
} = require("../controllers/productController");
// const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all product routes
// router.use(requireAuth);

// GET all products
router.get("/", getProducts);

// GET all MEN products
router.get("/men", getMenProducts);
router.get("/men/date_asc", getMenProductsDateAsc);
router.get("/men/date_desc", getMenProductsDateDesc);
router.get("/men/price_asc", getMenProductsPriceAsc);
router.get("/men/price_desc", getMenProductsPriceDesc);

// GET all WOMEN products
router.get("/women", getWomenProducts);
router.get("/women/date_asc", getWomenProductsDateAsc);
router.get("/women/date_desc", getWomenProductsDateDesc);
router.get("/women/price_asc", getWomenProductsPriceAsc);
router.get("/women/price_desc", getWomenProductsPriceDesc);

// GET single product
router.get("/:id", getProduct);

// POST a new product
router.post("/", createProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

// UPDATE a product
router.patch("/:id", updateProduct);

router.get("/men/tshirts", getMenTshirts);
router.get("/men/tshirts/price_asc", getMenTshirtsPriceAsc);
router.get("/men/tshirts/price_desc", getMenTshirtsPriceDesc);
router.get("/men/tshirts/date_asc", getMenTshirtsDateAsc);
router.get("/men/tshirts/date_desc", getMenTshirtsDateDesc);

router.get("/men/hoodies", getMenHoodies);
router.get("/men/hoodies/price_asc", getMenHoodiesPriceAsc);
router.get("/men/hoodies/price_desc", getMenHoodiesPriceDesc);
router.get("/men/hoodies/date_asc", getMenHoodiesDateAsc);
router.get("/men/hoodies/date_desc", getMenHoodiesDateDesc);

router.get("/men/jackets", getMenJackets);
router.get("/men/jackets/price_asc", getMenJacketsPriceAsc);
router.get("/men/jackets/price_desc", getMenJacketsPriceDesc);
router.get("/men/jackets/date_asc", getMenJacketsDateAsc);
router.get("/men/jackets/date_desc", getMenJacketsDateDesc);

router.get("/men/pants", getMenPants);
router.get("/men/pants/price_asc", getMenPantsPriceAsc);
router.get("/men/pants/price_desc", getMenPantsPriceDesc);
router.get("/men/pants/date_asc", getMenPantsDateAsc);
router.get("/men/pants/date_desc", getMenPantsDateDesc);

router.get("/men/shoes", getMenShoes);
router.get("/men/shoes/price_asc", getMenShoesPriceAsc);
router.get("/men/shoes/price_desc", getMenShoesPriceDesc);
router.get("/men/shoes/date_asc", getMenShoesDateAsc);
router.get("/men/shoes/date_desc", getMenShoesDateDesc);

router.get("/women/tshirts", getWomenTshirts);
router.get("/women/tshirts/price_asc", getWomenTshirtsPriceAsc);
router.get("/women/tshirts/price_desc", getWomenTshirtsPriceDesc);
router.get("/women/tshirts/date_asc", getWomenTshirtsDateAsc);
router.get("/women/tshirts/date_desc", getWomenTshirtsDateDesc);

router.get("/women/hoodies", getWomenHoodies);
router.get("/women/hoodies/price_asc", getWomenHoodiesPriceAsc);
router.get("/women/hoodies/price_desc", getWomenHoodiesPriceDesc);
router.get("/women/hoodies/date_asc", getWomenHoodiesDateAsc);
router.get("/women/hoodies/date_desc", getWomenHoodiesDateDesc);

router.get("/women/jackets", getWomenJackets);
router.get("/women/jackets/price_asc", getWomenJacketsPriceAsc);
router.get("/women/jackets/price_desc", getWomenJacketsPriceDesc);
router.get("/women/jackets/date_asc", getWomenJacketsDateAsc);
router.get("/women/jackets/date_desc", getWomenJacketsDateDesc);

router.get("/women/pants", getWomenPants);
router.get("/women/pants/price_asc", getWomenPantsPriceAsc);
router.get("/women/pants/price_desc", getWomenPantsPriceDesc);
router.get("/women/pants/date_asc", getWomenPantsDateAsc);
router.get("/women/pants/date_desc", getWomenPantsDateDesc);

router.get("/women/shoes", getWomenShoes);
router.get("/women/shoes/price_asc", getWomenShoesPriceAsc);
router.get("/women/shoes/price_desc", getWomenShoesPriceDesc);
router.get("/women/shoes/date_asc", getWomenShoesDateAsc);
router.get("/women/shoes/date_desc", getWomenShoesDateDesc);

module.exports = router;
