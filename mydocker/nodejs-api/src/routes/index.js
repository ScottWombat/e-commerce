import { Router } from 'express';
import productRouter from './product.js';
const api = Router()
  .use(productRouter);

export default Router().use('/api', api);