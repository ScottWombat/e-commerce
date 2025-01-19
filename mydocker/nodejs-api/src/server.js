import express from 'express';

import { InitializeRedisClient,RedisCachingMiddleware } from "./middlewares/redis.js"
import { InitializeMongodb } from './middlewares/mongodb.js';
import connectDB from './config/mongodb.js'
import { UserController } from "./controllers/products.js";
import router from './routes/index.js'
import { Benchmark } from './middlewares/benchmark.js';
import 'dotenv/config';
import cors from 'cors';


const PORT = process.env.PORT || 3009;

const corsOptions = {
    origin: "http://localhost:8081"
};
const HOST = '0.0.0.0';
async function initializeExpressServer() {
  
    await connectDB();
    //await InitializeMongodb();
   
    await InitializeRedisClient();
   
    const app = express();
    app.use(Benchmark);
    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(router);

    // register an endpoint
    //app.get("/api/v1/users", RedisCachingMiddleware(), UserController.getAll);

    app.get("/",(req,res)=>{
        return res.status(200).send(
            'Server1'
          );
    })
    app.listen(PORT, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}

 await initializeExpressServer()
  .then(()=>{
    console.log("Initializing Express Server complete")
  })
  .catch((e) => console.error(e));