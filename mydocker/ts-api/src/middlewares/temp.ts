import {logger} from '../logging';
import { Product } from '../model';
export const FetchProducts = async(req,res) =>{
    
        const catalog = req.params.catalog;
        const category = req.params.category;
        logger.info(`Catalog:${catalog}:${category}`)
        
        const results = await Product.find({catalog: 'Men',category:'Cock Rings'})
        if(results.length==0) return res.status(404).send("not found");
        res.send({
                fromCache: false,
                data: results,
        });
}
