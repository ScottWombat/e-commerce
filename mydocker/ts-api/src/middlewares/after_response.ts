import { logger } from '../logging'
export const AfterResponseMiddle = (req,res,next) =>{
    res.on('finish', () =>{
         logger.info("Now")
    });
    next();
}