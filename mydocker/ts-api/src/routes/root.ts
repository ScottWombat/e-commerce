import { Request, Response, Router } from 'express';
import { beforeMiddleware,responseHandler,afterMiddleware } from '../middlewares/localHandler';
import { RedisCachingMiddleware } from '../caching';
const rootRouter = Router()

rootRouter.get('/',  beforeMiddleware, afterMiddleware,RedisCachingMiddleware(),(req,res)=>{
    res.status(200).send({"response":"hello from root"});
});

export default rootRouter;