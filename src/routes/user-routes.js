const express = require("express");
const {
  signupUser,
  loginUser,
  getUserProfile,
} = require("../controllers/user-controller");
const { isAuth } = require("../middleware/auth");
const { createProduct } = require("../services/product_services");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/profile", isAuth, getUserProfile)
router.post("/create/profiles", isAuth, createProduct);



module.exports = router;
