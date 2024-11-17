import mongoose from 'mongoose';
import 'dotenv/config';
import { logger} from '../logging';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://myuser:mypassword@172.18.1.2:27017/mydb';

export const InitializeMongoDB = () =>{
    logger.info("DDDD")
    global.db = mongoose.connect(MONGODB_URI)
    .then(() => {
        logger.info(`Connected to MONGODB(${MONGODB_URI} successfully`)
    })
    .catch((err) => logger.error(err));
    
}