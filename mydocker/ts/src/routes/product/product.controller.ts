import { NextFunction, Request, Response, Router } from 'express';
import fs from 'fs'
import jwt, { JwtPayload} from 'jsonwebtoken';
import auth from '../auth';
import { users } from '../../database';
import { Product } from '../../models';
import { RandomNumber } from '../../utils';


interface IJwtPayload extends JwtPayload{
    _id: string,
    exp: number,
  }

const tokenSecret = process.env.SECRET || 'token123secretASD';

const router = Router();

const validateRequest = (requiredRole) => {
    return (req, res, next) => {
        const { authorization } = req.headers
        console.log(req.headers)
        const token = authorization.substring('Bearer '.length);
        console.log(token)
        try {
            const { _id ,iss,exp,role} = jwt.verify(token, tokenSecret) as IJwtPayload;
            console.log(iss)
            console.log(exp)
            console.log(Date.now())
            console.log(role)
            if (iss === 'my-api' && exp < Date.now() && role === requiredRole) {
                console.log("got to next")
                next();
                return;
            }
        } catch (err) {
            res.sendStatus(403);
            return;
        }
    }
}

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || user.password !== password) {
        res.status(400);
        res.send({ message: 'Invalid username or password' })
        return;
    }

    if (user.password === password) {
        const token = jwt.sign({
            role: user.role,
        }, tokenSecret, {
            algorithm: 'HS256',
            expiresIn: '5m',
            issuer: 'my-api',
            subject: user.id
        })
        res.send({ token });
        return;
    }
});


router.get('/product',validateRequest('customer'),async (req: Request, res: Response) => {
    res.send(JSON.stringify({ users }))
});

router.get('/get_products/:catalog/:category',async (req: Request, res: Response) => {
    const catalog = req.params['catalog'] 
    const category = req.params['category'] 
    console.log(catalog + category)
    const products = await Product.find({catalog: catalog,category:category})
    res.status(201).json({ message: "User registered successfully", products: products});
});

  
export default router;