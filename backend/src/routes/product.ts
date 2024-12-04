import { createProduct, getProducts } from "../controllers/product";
import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import { validateProduct } from "../middlewares/validation";

const router = Router();

const productRouteValidator = celebrate({
  [Segments.BODY]: validateProduct,
});

router.get("/product", getProducts);
router.post("/product", productRouteValidator, createProduct);

export default router;
