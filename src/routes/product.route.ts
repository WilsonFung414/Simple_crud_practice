import express from "express";
import { Product } from "../models/products.model";

import {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
