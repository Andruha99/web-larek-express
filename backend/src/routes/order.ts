import orderProduct from "../controllers/order";
import { celebrate, Segments } from "celebrate";
import { validateOrder } from "../middlewares/validation";
import { Router } from "express";

const router = Router();

const orderRouteValidator = celebrate({
  [Segments.BODY]: validateOrder,
});

router.post("/order", orderRouteValidator, orderProduct);

export default router;
