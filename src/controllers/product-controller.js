const { reset } = require("nodemon");
const catchAsyncError = require("../middleware/catchAsyncError");
const { productValidate, createProduct  ,getAllProductsUser} = require("../services/product_services");

exports.createUserProduct = catchAsyncError(async (req,res) => {
    const data = productValidate(req,res);
    await createProduct(data, res);
})

exports.getAllProduct = catchAsyncError(async (req,res) => {
    await getAllProductsUser(req.user._id,res)
})

