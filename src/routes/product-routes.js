const express = require("express");
const { isAuth } = require("../middleware/auth");
const { createUserProduct ,getAllProduct } = require("../controllers/product-controller");
const router = express.Router();


router.post("/create/product", isAuth, createUserProduct);
router.get("/get/product", isAuth, getAllProduct);


module.exports = router;
