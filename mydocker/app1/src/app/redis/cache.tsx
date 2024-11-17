import { Console } from 'console'
import type { RedisClientType } from 'redis'
import { createClient } from 'redis'
let redisClient: RedisClientType
let isReady: boolean
async function getCache(): Promise<RedisClientType> {
    if (!isReady) {
      redisClient = createClient({
        url: 'redis://172.18.1.4',
        username: 'default',
        password: 'rev123',
      })
      redisClient.on('error', () => console.log(`Redis Error: `))
      redisClient.on('connect', () => console.log('Redis connected'))
      redisClient.on('reconnecting', () => console.log('Redis reconnecting'))
      redisClient.on('ready', () => {
        isReady = true
        console.info('Redis ready!')
      })
      await redisClient.connect()
    }
    return redisClient
  }
  
  getCache().then(connection => {
    redisClient = connection
  }).catch(err => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
   console.log({ err }, 'Failed to connect to Redis')
  })
  
  export {
    getCache,
  }
  