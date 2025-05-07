import express from "express";
import mongoose from "mongoose";
import "../config/env";
import { Product } from "./models/products.model";
import router from "./routes/product.route";

const app = express();
const mongouri =
  process.env.MONGODB_URI == undefined ? "" : process.env.MONGODB_URI;
const port = process.env.PORT == undefined ? 3000 : process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", router);

// Health check route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});

// HTTP SERVER
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

// MONGODB CONNECTION
mongoose
  .connect(mongouri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

export default app;
