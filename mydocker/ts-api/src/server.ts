import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import ServerConfig from './config/server_config';
import { logger} from './logging';
import { Middlewares } from './middlewares';
import { InitializeMongoDB } from './mongo';
import { InitializeRedisClient } from './caching';
import Routes from './routes';

const initializeExpressServer = async() =>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    InitializeRedisClient();
    InitializeMongoDB();
    initializeMiddlewares(app);
    initializeRouters(app);
    listening(app);
   
}
const initializeMiddlewares = (app)=>{
    Middlewares(app).then(()=>{
        logger.info("Initialize middlewares complete")
    }).catch((e) => logger.error(e));
}

const initializeRouters = (app)=>{
    Routes(app).then(()=>{
        logger.info("Initialize routes complete")
    }).catch((e) => logger.error(e));
}

const listening = (app)=>{
    app.listen(ServerConfig.SERVER_PORT,() => {
        logger.info(`Application started on port ${ServerConfig.SERVER_PORT}`);
    })
}


initializeExpressServer().then(()=>{
    logger.info("Initialization complete")
}).catch((e) => console.error(e));

