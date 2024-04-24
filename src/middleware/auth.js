const { getUserById } = require("../services/user-service");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");


exports.isAuth = catchAsyncError(async (req, res, next) => {
  const { token } = req.headers;
  if (!token) throw new Error("token not found");
  console.log(token)
  console.log(process.env.JWT_SECRET)
  const data = await jwt.verify(token,"jhdgcjhdstu6vg");
  console.log(data)
  const user =await getUserById(data?.id);
  req.user = user;
  console.log(req.user)
  console.log(req.user)
  next();
});
