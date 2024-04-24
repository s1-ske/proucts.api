const express = require("express");
const app = express();
const userRoutes = require("./src/routes/user-routes");
const productRoutes = require("./src/routes/product-routes");

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);

module.exports = app;
