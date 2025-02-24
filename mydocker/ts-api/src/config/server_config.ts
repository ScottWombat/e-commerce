
export default class ServerConfig {
    static NODE_ENV = ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') ? 'localhost' : '0.0.0.0');
    static SERVER_PORT = process.env.PORT || 3030;
    static SERVER_HOST = process.env.HOST || '0.0.0.0';
    static MONGO_DB = (process.env.NODE_ENV === 'test' ? 'test' : 'my_app');
    static MONGO_DB_URL = "mongodb://0.0.0.0:27017/";
    static REDIS_HOST = '0.0.0.0';
    static REDIS_PORT = (process.env.REDIS_PORT || '6379');
    // In second.
    static REDIS_CACHE_TIMEOUT = 120;
    static LOG_LEVEL = process.env.LOG_LEVEL || 'info'
  }