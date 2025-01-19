var fs = require('fs')
var myobj = fs.readFileSync('../generator/products.json')
myobj = JSON.parse(myobj)

console.log(myobj)