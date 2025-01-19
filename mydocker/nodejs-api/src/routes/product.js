import { Router } from 'express';
import { Product,myCollection } from '../models/product.js';
const productRouter = Router();
productRouter.get('/product/:catalog/:category', async (req, res, next) => {
    console.log("DEE")
    try {
      //const user = await createUser({ ...req.body.user, demo: false });
      const result = await Product.find({});
      res.status(201).json({ test:result });
    } catch (error) {
      console.log(error)
      //next(error);
    }
  });

  export default productRouter;