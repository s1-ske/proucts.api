const respo = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    message,
    data,
  });
};

const sendToken = (user, res) => {
  const token = user.getJWTToken();
  const ashraf  = "dfchdbhjdsgdsyh"
  return respo(res, 200, "User logged in successfully", { user, token, ashraf });
};

module.exports = { sendToken, respo };
