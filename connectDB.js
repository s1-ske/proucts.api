const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

exports.connectMongo = () => {
  mongoose
    .connect(URI)
    .then((res) => console.log(`mongo connected at ${res.connection.host}`))
    .catch((err) => console.log(`Mongo ERror ${err?.message}`));
};
