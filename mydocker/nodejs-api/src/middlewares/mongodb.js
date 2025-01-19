import mongoose from 'mongoose';
import 'dotenv/config'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

export const InitializeMongodb = async() =>{
    global.db = mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(`Connected to MONGODB(${MONGODB_URI} successfully`)
    })
    .catch((err) => console.error(err));
}