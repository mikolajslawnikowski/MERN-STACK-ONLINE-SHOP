const express = require("express");

const {
  loginUser,
  signupUser,
  infoUser,
  // changeEmail,
  // changePassword,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/info", infoUser);
// router.post("/changeEmail/:id", changeEmail);
// router.post("/changePassword/:id", changePassword);

module.exports = router;
