import { Router } from 'express';
import productController from './product/product.controller';
import authController from './auth/auth.controller';
import jsonController from './json/json.controller';
import orderController from './order';

const apiRouter = Router()
                    .use(productController)
                    .use(orderController);

export const api = Router().use('/api',apiRouter);
export const auth = Router().use('/auth',authController);
export const json = Router().use('/json',jsonController);
