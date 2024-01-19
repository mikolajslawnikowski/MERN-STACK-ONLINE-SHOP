const express = require("express");
const {
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
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id/rating", getProductRating);

router.get("/men", getMenProducts);
router.get("/men/date_asc", getMenProductsDateAsc);
router.get("/men/date_desc", getMenProductsDateDesc);
router.get("/men/price_asc", getMenProductsPriceAsc);
router.get("/men/price_desc", getMenProductsPriceDesc);
router.get("/men/rating_asc", getMenProductsRatingAsc);
router.get("/men/rating_desc", getMenProductsRatingDesc);

router.get("/women", getWomenProducts);
router.get("/women/date_asc", getWomenProductsDateAsc);
router.get("/women/date_desc", getWomenProductsDateDesc);
router.get("/women/price_asc", getWomenProductsPriceAsc);
router.get("/women/price_desc", getWomenProductsPriceDesc);
router.get("/women/rating_asc", getWomenProductsRatingAsc);
router.get("/women/rating_desc", getWomenProductsRatingDesc);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

router.get("/men/tshirts", getMenTshirts);
router.get("/men/tshirts/price_asc", getMenTshirtsPriceAsc);
router.get("/men/tshirts/price_desc", getMenTshirtsPriceDesc);
router.get("/men/tshirts/date_asc", getMenTshirtsDateAsc);
router.get("/men/tshirts/date_desc", getMenTshirtsDateDesc);
router.get("/men/tshirts/rating_asc", getMenTshirtsRatingAsc);
router.get("/men/tshirts/rating_desc", getMenTshirtsRatingDesc);

router.get("/men/hoodies", getMenHoodies);
router.get("/men/hoodies/price_asc", getMenHoodiesPriceAsc);
router.get("/men/hoodies/price_desc", getMenHoodiesPriceDesc);
router.get("/men/hoodies/date_asc", getMenHoodiesDateAsc);
router.get("/men/hoodies/date_desc", getMenHoodiesDateDesc);
router.get("/men/hoodies/rating_asc", getMenHoodiesRatingAsc);
router.get("/men/hoodies/rating_desc", getMenHoodiesRatingDesc);

router.get("/men/jackets", getMenJackets);
router.get("/men/jackets/price_asc", getMenJacketsPriceAsc);
router.get("/men/jackets/price_desc", getMenJacketsPriceDesc);
router.get("/men/jackets/date_asc", getMenJacketsDateAsc);
router.get("/men/jackets/date_desc", getMenJacketsDateDesc);
router.get("/men/jackets/rating_asc", getMenJacketsRatingAsc);
router.get("/men/jackets/rating_desc", getMenJacketsRatingDesc);

router.get("/men/pants", getMenPants);
router.get("/men/pants/price_asc", getMenPantsPriceAsc);
router.get("/men/pants/price_desc", getMenPantsPriceDesc);
router.get("/men/pants/date_asc", getMenPantsDateAsc);
router.get("/men/pants/date_desc", getMenPantsDateDesc);
router.get("/men/pants/rating_asc", getMenPantsRatingAsc);
router.get("/men/pants/rating_desc", getMenPantsRatingDesc);

router.get("/men/shoes", getMenShoes);
router.get("/men/shoes/price_asc", getMenShoesPriceAsc);
router.get("/men/shoes/price_desc", getMenShoesPriceDesc);
router.get("/men/shoes/date_asc", getMenShoesDateAsc);
router.get("/men/shoes/date_desc", getMenShoesDateDesc);
router.get("/men/shoes/rating_asc", getMenShoesRatingAsc);
router.get("/men/shoes/rating_desc", getMenShoesRatingDesc);

router.get("/women/tshirts", getWomenTshirts);
router.get("/women/tshirts/price_asc", getWomenTshirtsPriceAsc);
router.get("/women/tshirts/price_desc", getWomenTshirtsPriceDesc);
router.get("/women/tshirts/date_asc", getWomenTshirtsDateAsc);
router.get("/women/tshirts/date_desc", getWomenTshirtsDateDesc);
router.get("/women/tshirts/rating_asc", getWomenTshirtsRatingAsc);
router.get("/women/tshirts/rating_desc", getWomenTshirtsRatingDesc);

router.get("/women/hoodies", getWomenHoodies);
router.get("/women/hoodies/price_asc", getWomenHoodiesPriceAsc);
router.get("/women/hoodies/price_desc", getWomenHoodiesPriceDesc);
router.get("/women/hoodies/date_asc", getWomenHoodiesDateAsc);
router.get("/women/hoodies/date_desc", getWomenHoodiesDateDesc);
router.get("/women/hoodies/rating_asc", getWomenHoodiesRatingAsc);
router.get("/women/hoodies/rating_desc", getWomenHoodiesRatingDesc);

router.get("/women/jackets", getWomenJackets);
router.get("/women/jackets/price_asc", getWomenJacketsPriceAsc);
router.get("/women/jackets/price_desc", getWomenJacketsPriceDesc);
router.get("/women/jackets/date_asc", getWomenJacketsDateAsc);
router.get("/women/jackets/date_desc", getWomenJacketsDateDesc);
router.get("/women/jackets/rating_asc", getWomenJacketsRatingAsc);
router.get("/women/jackets/rating_desc", getWomenJacketsRatingDesc);

router.get("/women/pants", getWomenPants);
router.get("/women/pants/price_asc", getWomenPantsPriceAsc);
router.get("/women/pants/price_desc", getWomenPantsPriceDesc);
router.get("/women/pants/date_asc", getWomenPantsDateAsc);
router.get("/women/pants/date_desc", getWomenPantsDateDesc);
router.get("/women/pants/rating_asc", getWomenPantsRatingAsc);
router.get("/women/pants/rating_desc", getWomenPantsRatingDesc);

router.get("/women/shoes", getWomenShoes);
router.get("/women/shoes/price_asc", getWomenShoesPriceAsc);
router.get("/women/shoes/price_desc", getWomenShoesPriceDesc);
router.get("/women/shoes/date_asc", getWomenShoesDateAsc);
router.get("/women/shoes/date_desc", getWomenShoesDateDesc);
router.get("/women/shoes/rating_asc", getWomenShoesRatingAsc);
router.get("/women/shoes/rating_desc", getWomenShoesRatingDesc);

module.exports = router;
