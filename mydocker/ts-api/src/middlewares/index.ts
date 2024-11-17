import { MorganMiddleware } from "./morgan";
import { AfterResponseMiddle } from "./after_response";
import { CORS } from './cors';
export const Middlewares = async(app) =>{
    app.use(CORS);
    //app.use(MorganMiddleware);
    app.use(AfterResponseMiddle);
}