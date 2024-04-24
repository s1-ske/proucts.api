const catchAsyncError = require("../middleware/catchAsyncError");
const {
  validateUser,
  createUser,
  loginValidateUser,
  loginUserService,
} = require("../services/user-service");
const {productValidate,createProduct} = require("../services/product_services")
const { respo } = require("../utils/util");

exports.signupUser = catchAsyncError(async (req, res) => {
  const data = validateUser(req.body, res);
  await createUser(data, res);
});

exports.loginUser = catchAsyncError(async (req, res) => {
  const data = loginValidateUser(req.body, res);
  await loginUserService(data, res);
});

exports.getUserProfile = async (req, res) => {
  const user = req.user;
  console.log(req.user)
  respo(res, 200, "profile got", user);
};




