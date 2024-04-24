const { Schema, model } = require("mongoose");

const productSchema = Schema({
  createdBy: String,
  name: String,
  description: String,
  price: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Product", productSchema);
