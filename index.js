require("dotenv").config();
const app = require("./app");
const { connectMongo } = require("./connectDB");
const PORT = process.env.PORT;

connectMongo();

app.listen(PORT, () => console.log(`Server Up and Running at Port ${PORT}`));
