const express = require("express");
const { getOpinions } = require("../controllers/opinionController");
const { getOpinionsByProductId } = require("../controllers/opinionController");
const { createOpinion } = require("../controllers/opinionController");
const { deleteOpinion } = require("../controllers/opinionController");

const router = express.Router();

// GET all opinions
router.get("/", getOpinions);

// GET opinions for a single product
router.get("/:id", getOpinionsByProductId);

// CREATE new opinion
router.post("/", createOpinion);

// DELETE opinion
router.delete("/:id", deleteOpinion);

module.exports = router;
