const express = require("express");
const { getOpinions } = require("../controllers/opinionController");
const { getOpinionsByProductId } = require("../controllers/opinionController");
const { createOpinion } = require("../controllers/opinionController");
const { deleteOpinion } = require("../controllers/opinionController");

const router = express.Router();

router.get("/", getOpinions);

router.get("/:id", getOpinionsByProductId);

router.post("/", createOpinion);

router.delete("/:id", deleteOpinion);

module.exports = router;
