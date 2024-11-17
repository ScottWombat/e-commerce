import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import express from "express";
import fs from "fs";

const app = express();
const port = 3009;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});
  
  app.use(
    express.static(__dirname + "/public")
  );
  
  app.listen(port, () => {
      console.log(`Application started on port ${port}`);
  })
  
