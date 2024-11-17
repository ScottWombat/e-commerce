import 'dotenv/config';
import { createClient } from 'redis';
import { logger } from '../logging'
import hash from 'object-hash';

export const redisClient = createClient({
  url: 'redis://172.18.1.4',
  username: 'default',
  password: 'rev123',
});
const requestToKey = (req) => {
  // build a custom object to use as part of the Redis key
  logger.info(`query:${req.params.catalog}:${req.params.category}`)
  const reqDataToHash = {
    query: req.query,
    body: req.body,
  };

  // `${req.path}@...` to make it easier to find
  // keys on a Redis client
  ///return `${req.path}@${hash.sha1(reqDataToHash)}`;
  return {'catalog':req.params.catalog,'category':req.params.category}
}

const isRedisWorking = () => {
  // verify wheter there is an active connection
  // to a Redis server or not
  logger.info("isRedisWorking")
  return !!redisClient?.isOpen;
}

const  writeData = async(key, data, options) =>{
  if (isRedisWorking()) {
    try {
      // write data to the Redis cache
      await redisClient.set(key, data, options);
    } catch (e) {
      console.error(`Failed to cache data for key=${key}`, e);
    }
  }
}

const readData = async(key) =>{
  let cachedValue = undefined;
  if (isRedisWorking()) {
    // try to get the cached response from redis
    return await redisClient.get(key);
  }

  return cachedValue;
}

export const InitializeRedisClient = async() =>{
    // read the Redis connection URL from the envs
   
    redisClient.on("error", (e) => {
    logger.error(`Failed to create the Redis client with error:`);
    logger.error(e);
    });

    redisClient.on("connect", () => {
      logger.info(`Redis Connection`);
      
      });
 
    redisClient.connect();
    
  
}
export const RedisCachingMiddleware = (options = {EX: 21600, // 6h
  },compression = true ) =>{
  return async(req,res,next) =>{
   
    if (isRedisWorking()){
      logger.info("working")
      const params = requestToKey(req);
      const key = `${params.catalog}:${params.category}`;
      
      logger.info(key)
      const cachedValue = await readData(key);

      //logger.info(`cachedValue ${key}:${cachedValue}`)
      if (cachedValue) {
        //return res.json({'cached': true,'data':JSON.parse(cachedValue)});
        logger.info("Cached Data")
        //var obj = JSON.parse(cachedValue);
        //logger.info(Object.keys(JSON.parse(cachedValue)).length)
        return res.json({totalProducts:Object.keys(JSON.parse(cachedValue)).length,data:JSON.parse(cachedValue)});
      }
    }
    next();
  }

}

