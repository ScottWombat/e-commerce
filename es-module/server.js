import express from "express";
import {createClient} from "redis";
import { log } from 'console'
const app = express();
app.get("/",async (_req, res) => {
    //const client = createClient({
    //  host: 'http://172.18.1.4',
    //  no_ready_check: true,
    //  auth_pass: 'rev123',
    //  post:6379});
    const client = createClient({
      url: 'redis://172.18.1.4',
      username: 'default',
      password: 'rev123',
    })
    client.connect();
    client.on('error', err => console.log('Redis error: ', err.message));
    client.on('connect', () => console.log('Connected to redis server'));
    client.set("key3",60)
    const k = await client.get("key1")
    log(k)
    res.send("API Runningkkk");
  });

const server = app.listen('8888', () =>
  console.log(`Server started on port 8888`)
);