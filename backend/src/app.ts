import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routes/product";

const cors = require("cors");

const { PORT = 3000, DB_ADDRESS = "mongodb://127.0.0.1:27017/weblarek" } =
  process.env;

const app = express();
app.use(cors());

mongoose.connect(DB_ADDRESS);

app.use(productsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
