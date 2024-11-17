import { Request, Response, Router } from 'express';
import { RedisCachingMiddleware} from '../caching';
import { FetchProduct} from '../services/fetch.product';
const productRouter = Router()

//productRouter.get('/products/:catalog/:category',RedisCachingMiddleware(),async (req: Request, res: Response) => {
//   res.send(JSON.stringify({ 'msg':'hello' }))
//});

productRouter.get('/products/:catalog/:category',RedisCachingMiddleware(),FetchProduct);

export default productRouter;
