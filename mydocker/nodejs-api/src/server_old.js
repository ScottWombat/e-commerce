'use strict';

import express from 'express';
//import { Low  } from 'lowdb'
//import FileSync from 'lowdb/adapters/FileSync'
import { JSONFilePreset } from 'lowdb/node'
import { InitializeRedisClient } from "./middlewares/redis.js"
import dotenv from 'dotenv';
dotenv.config()

//import Memory from 'lowdb/adapters/Memory'

// Constants
const PORT = process.env.PORT || 3009;
const HOST = '0.0.0.0';

const defaultData = { posts: [] }
const db = await JSONFilePreset('products.json', defaultData)
//console.log(db.data)

const filterData = (data,catalog,category, filters = {}) =>{
  const defaults = {
    catalog: catalog,
    category: category
  }

  // Merge any filters with the defaults
  filters = Object.assign({}, defaults, filters);
  return data.filter(laur => {
    return (laur.catalog == filters.catalog &&
             laur.category == filters.category
           )
    });
}

await InitializeRedisClient();

const app = express();
app.get("/",(req,res) =>{
  return res.status(200).send(
    'Hello'
  );
})
app.get("/api/products/:catalog/:category", async(req, res) => {
  let data = filterData(db.data,req.params.catalog,req.params.category)
  
  return res.status(200).send({
      fromCache: false,
      data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

