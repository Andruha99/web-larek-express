import { createProduct, getProducts } from "../controllers/product";
import { Router } from "express";

const router = Router();

router.get("/product", getProducts);
router.post("/product", createProduct);

export default router;
