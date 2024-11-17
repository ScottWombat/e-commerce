import Redis from 'ioredis';
import { createClient } from 'redis';

const redisClient = createClient({
        url: 'redis://172.18.1.4',
        username: 'default',
        password: 'rev123',
})
redisClient.connect();
redisClient.on('error', err => console.log('Redis error: ', err.message));
redisClient.on('connect', () => console.log('Connected to redis server'));

export default redisClient;

