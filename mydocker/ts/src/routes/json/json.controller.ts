import { NextFunction, Request, Response, Router } from 'express';
import { RandomNumber } from '../../utils';
import fs from 'fs'

const catalog=['Men','Women','Gay']
const prices=[123.50,321.00,60.32,100.32,92.12];
const men_category=['Penis Pumps','Prostate Massagers','Strokers','Sex Dolls'];
const women_category=['Dildos','Vibrators'];
const gay_category=['Cock Rings','Butt Plugs','Penis Pumps','Strokers','Anal Stimulators'];

var description='Fill your booty with beaded bliss.';
description += '\n';
description += 'Crafted from velvety-soft silicone, this set of three anal beads features uniquely curved beaded shapes to send you to stimulation heaven.';
description += '\n';
description += 'The included push-button vibrator slips perfectly into the looped base of each plug so you can explore 7 thrilling vibration speeds and patterns to take your pleasure to the next level.';
description += '\n';
description += 'For best results use with water-based lubricant only, and cleanse with toy cleaner before and after use.';

const router = Router();

router.get('/generator',async (req: Request, res: Response) => {
    let products:any[]=[];
    for (let i = 0; i < 150; i++) {
        //let p = new IProduct({catalog:'Men',category:'Cock Rings'})
        const bla = Object.assign({}, {catalog:'Men',category:'Cock Rings'})
        var num = Math.floor((Math.random() * 3) ) ;
        let category='';
        if (num===0){
            
            category = men_category[Math.floor((Math.random() * 4))]
        }else if (num===1){
            category = women_category[Math.floor((Math.random() * 2))]
        }else{
            category = gay_category[Math.floor((Math.random() * 5))]
        }
        let temp =  {
            id: RandomNumber(),
            catalog:catalog[num],
            category:category,
            price: prices[Math.floor((Math.random() * 5))],
            title: category,
            description: description
        }
        products.push(temp);
    }
    fs.writeFile("products.json", JSON.stringify(products), function(err) {
        if (err) {
            console.log(err);
        }
    });
    //console.log(products)
    //let saved_product = await product.save();
    //let saved_product = await Product.find({catalog:'Men'});
    

    res.status(201).json({ message: "Products generateed successfully", user: "saved_product" });

});

export default router;