const Product = require("../models/productModel");
const Opinion = require("../models/opinionModel");
const mongoose = require("mongoose");

const getOpinions = async (req, res) => {
  const opinions = await Opinion.find({});

  res.status(200).json(opinions);
};

const getOpinionsByProductId = async (req, res) => {
  const opinions = await Opinion.find({ itemID: req.params.id });
  res.json(opinions);
};

const createOpinion = async (req, res) => {
  const { itemID, authorName, authorSurname, opinionText, ratingValue } =
    req.body;

  let emptyFields = [];

  if (!opinionText) {
    emptyFields.push("opinionText");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Opinion cannot be empty`, emptyFields });
  }

  if (typeof ratingValue !== "number" || ratingValue <= 0 || ratingValue > 5) {
    return res.status(400).json({ error: `Rating value is not valid` });
  }

  try {
    const opinion = await Opinion.create({
      itemID,
      authorName,
      authorSurname,
      opinionText,
      ratingValue,
    });

    const product = await Product.findById(itemID);
    if (!product) {
      return res.status(404).json({ error: `Product not found` });
    }
    product.ratingCount = product.ratingCount ? product.ratingCount + 1 : 1;
    product.ratingSum = product.ratingSum
      ? product.ratingSum + ratingValue
      : ratingValue;
    product.rating = product.ratingSum / product.ratingCount;
    await product.save();

    res.status(200).json(opinion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOpinion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such opinion" });
  }

  const opinion = await Opinion.findOneAndDelete({ _id: id });

  if (!opinion) {
    return res.status(400).json({ error: "No such opinion" });
  }

  res.status(200).json(opinion);
};

module.exports = {
  getOpinions,
  getOpinionsByProductId,
  createOpinion,
  deleteOpinion,
};
