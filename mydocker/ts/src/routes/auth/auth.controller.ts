import { NextFunction, Request, Response, Router } from 'express';
import jwt, { JwtPayload} from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../../models';

const router = Router();

router.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, password: hashedPassword };
      //users.push(newUser);
      const user = new User({name:'revit',email:'revit12333'});
      let k = await user.save();
      res.status(201).json({ message: "User registered successfully", user: k });
    } catch (e:any){
      console.log(e.message);
    }
  });

export default router;