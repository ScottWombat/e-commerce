import {logger} from '../logging';
import { Product } from '../model';
import { redisClient } from '../caching';
export const FetchProduct = async(req,res) =>{

        logger.info(`Query:${req.params.catalog}/${req.params.category}`)
        const perPage = 100; //10docs in single page
        const page = 1;
        const results = await Product.find({catalog: req.params.catalog,category:req.params.category})
                                     .skip(perPage * page).limit(perPage);
        if(results.length==0){
           return res.status(404).send("not found");
        } 
        let cou =0;
        const flatResults = results.map((res) =>{
                cou = cou + 1;
                return res.toObject();
        });
        const result_length = flatResults.pop;
        logger.info(`Count${cou}`)
        const redis_key = `${req.params.catalog}:${req.params.category}`;
        //await redisClient.set(redis_key,JSON.stringify(results));
        await redisClient.set(redis_key,JSON.stringify(flatResults));
        //res.send({
        //        fromCache: false,
        //        data: results,
        //});
        logger.info("Fresh data")
        //
        res.send(results)
    
}
