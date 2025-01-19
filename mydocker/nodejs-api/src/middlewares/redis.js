import 'dotenv/config';
import { createClient } from 'redis';
import hash from 'object-hash';

let redisClient = undefined;
const requestToKey = (req) => {
  // build a custom object to use as part of the Redis key
  const reqDataToHash = {
    query: req.query,
    body: req.body,
  };

  // `${req.path}@...` to make it easier to find
  // keys on a Redis client
  return `${req.path}@${hash.sha1(reqDataToHash)}`;
}

const isRedisWorking = () => {
  // verify wheter there is an active connection
  // to a Redis server or not
  console.log("DDDDDDDDDDDD")
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
    const REDIS_URI = process.env.REDIS_URI || 'redis://172.20.0.2:6379';
  
    //redisClient = createClient({url:REDIS_URI}).on("error", (e) => {
    redisClient = createClient({
      url: 'redis://172.18.1.4',
      username: 'default',
      password: 'rev123',
    }).on("error", (e) => {
    console.error(`Failed to create the Redis client with error:`);
    console.error(e);
    });
 
    try {
      // connect to the Redis server
      await redisClient.connect();
      console.log(`Connected to Redis(${REDIS_URI}) successfully!`);
    } catch (e) {
      console.error(`Connection to Redis failed with error:`);
      console.error(e);
    }
  
}

export const RedisCachingMiddleware = (options = { EX: 21600}) =>{
    return async(req,res ,next) => {
      if (isRedisWorking()) {
        const key = requestToKey(req);
        // if there is some cached data, retrieve it and return it
        const cachedValue = await readData(key);
        console.log(cachedValue)
        if (cachedValue) {
          try {
            // if it is JSON data, then return it
            return res.json(JSON.parse(cachedValue));
          } catch {
            // if it is not JSON data, then return it
            return res.send(cachedValue);
          }
        } else {
          // override how res.send behaves
          // to introduce the caching logic
          const oldSend = res.send;
          res.send = function (data) {
            // set the function back to avoid the 'double-send' effect
            res.send = oldSend;
  
            // cache the response only if it is successful
            if (res.statusCode.toString().startsWith("2")) {
              writeData(key, data, options).then();
            }
  
            return res.send(data);
          };
  
          // continue to the controller function
          console.log("continue to controller function")
          next();
        }
      } else {
        // proceed with no caching
        console.log("process with no caching")
        next();
      }
    };
}
