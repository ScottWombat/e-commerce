import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL || 'mongodb://myuser:mypassword@172.18.1.2:27017/mydb';
export const ConnectDB = async (): Promise<void>=> {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.connect(MONGO_URL);
    mongoose.connection.on('error', function (err) {
        console.error(err);
    });
    mongoose.connection.once('open', () => {
        console.log('[+] Connected to database successfully');
    });

    //return mongoose.connect(MONGO_URL);
}
