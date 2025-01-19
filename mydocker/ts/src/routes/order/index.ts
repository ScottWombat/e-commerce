import { Router,Request,Response } from 'express';
const router = Router();


router.get('/order',async (req: Request, res: Response) => {
    res.send(JSON.stringify({ test:'test' }));
});

export default router;