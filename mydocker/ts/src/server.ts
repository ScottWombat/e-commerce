import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ConnectDB } from './config/mongodb';
import dotenv from 'dotenv';
import { benchmark } from './middlewares/benchmark';
import {InitializeMongodb } from './middlewares/mongodb'
import {api,auth,json} from './routes';
const corsOptions = {
    origin: "http://localhost:8081"
};

const initializeExpressServer = async() =>{
    await ConnectDB();
    //await InitializeMongodb();
    
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(cors(corsOptions));
    //routes
    app.use(api);
    app.use(auth);
    app.use(json)

    const port = 3009;
    
    
    //
    
    app.get('/', function (req, res) {
        res.send("Hello world!ddddeee");
    });
    app.listen(port, () => {
        console.log(`Application started on port ${port}`);
    })
}

initializeExpressServer()
  .then(()=>{
    console.log("Complete")
  })
  .catch((e) => console.error(e));
