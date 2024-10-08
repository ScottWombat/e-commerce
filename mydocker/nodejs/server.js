'use strict';

const os = require("os");
const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();

// Serve static files from the build folder
app.use(express.static('dist'));

// Serve the index.html file for all non-static requests
app.get('*', (req, res) => {
  console.log(os.networkInterfaces().eth0[0].address)
  res.sendFile(path.join(__dirname,'dist','index.html'));
});

//app.get('/nodejs', (req, res) => {
  //res.send('Hello World: ' + 'Host name: ' + os.networkInterfaces().eth0[0].address);
//});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});