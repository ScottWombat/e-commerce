import morgan from 'morgan';
import { morganLogger } from '../logging'
export const MorganMiddleware = morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms",
    { stream :{
      write: (message) => morganLogger.http(message.trim()),
    }}
  );