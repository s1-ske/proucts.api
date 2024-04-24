const { respo, sendToken } = require("../utils/util"); //200kb
const User = require("../model/user-model"); //500kb

exports.validateUser = (data, res) => {
  const { name, email, password } = data;
  if (!name || !email || !password) {
    return respo(res, 400, "please fill all the details", {});
  }
  return { name, email, password };
};

exports.createUser = async (data, res) => {
  if (!data) {
    return respo(res, 404, "data is missing", {});
  }
  const user = await User.create(data);
  respo(res, 201, "User Created Sucesssfully", user);
};

exports.loginValidateUser = (data, res) => {
  const { email, password } = data;
  if (!email || !password) {
    return respo(res, 400, "please fill the details");
  }

  return { email, password };
};

exports.loginUserService = async (data, res) => {
  if (!data) {
    return respo(res, 404, "data is missing", {});
  }
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) return respo(res, 404, "user not found on this mail", {});
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) return respo(res, 403, "Invalid creds", {});
  sendToken(user, res);
};

exports.getUserById = async (id) => {
  if (!id) throw new Error("please enter the id");
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};


