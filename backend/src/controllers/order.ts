import { NextFunction, Request, Response } from "express";
import Product from "../models/product";
import { faker } from "@faker-js/faker";
import BadRequestError from "../errors/bad-request";

export const orderProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { total, items } = req.body;

  try {
    const products = await Product.find({ _id: { $in: items } });

    const filteredProducts = products.filter(
      (product) => product.price !== null
    );

    if (products.length === 0) {
      return next(new BadRequestError("Empty order"));
    }

    if (filteredProducts.length !== items.length) {
      return next(new BadRequestError("Wrong order"));
    }

    const totalSum = filteredProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );

    if (totalSum !== total) {
      return next(new BadRequestError("Wrong total sum"));
    }

    return res.status(200).send({ id: faker.string.uuid(), total: totalSum });
  } catch (err) {
    return next(err);
  }
};

export default orderProduct;
