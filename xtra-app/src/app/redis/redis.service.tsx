import { createClient ,createCluster} from 'redis';
import redisClient from '.';

/** A conventional Redis connection. */
//export type RedisClientConnection = ReturnType<typeof createClient>

/** A clustered Redis connection. */
//export type RedisClusterConnection = ReturnType<typeof createCluster>

/** A Redis connection, clustered or conventional. */
//export type RedisConnection = RedisClientConnection | RedisClusterConnection

class RedisService{
    //private static _instance: RedisService;
    //private redisConnection: RedisConnection;
   
    constructor(){
        
    }
  

    get_key(key){
        return redisClient.get(key);
    }
    set(key,value){
       // this.redisConnection.set(key,value);
        return;
    }

}
export default RedisService;