import { Router } from 'express';
import productRouter from './product'
import rootRouter from './root';
const Routes = async (app) =>{
    const router = Router();
    const mainRouter = router.use(rootRouter)
    
    const aptRouter = router.use(productRouter);
    app.use('/',mainRouter);
    app.use('/api',aptRouter);
}

export default Routes;