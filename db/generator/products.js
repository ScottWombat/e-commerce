var fs = require('fs');
var jsonArray = []; 
var catalog_type =["Men","Women","Gay"]
var men_category=["Butt Plugs","Cock Rings","Sex Dolls","Strokers","Pennis Pumps"]
var women_category=["Vibrators","Dildos"]
var gay_category= ["Dildos","Butt Plugs","Cock Rings","Strokers","Pennis Pumps","Sex Dolls","Dildos"]

var vibrators=[
    "Fun Factory - Tiger Vibrator",
    "Fun Factory Big Boss Black Line Vibrator",
    "California Exotic Naughty Bits Shake It Off 4.25 inches Bullet Vibrator",
    "California Exotic Chic Daisy 4.25 inches Bullet Vibrator",
    "We-Vibe Tango X Bullet Vibrator",
    "Bang Glow In The Dark 4 Attachments Rechargeable Bullet Vibe"
]
var cock_rings= [
    "QUTOYS 10 Thrilling Vibration 3 Thrusting Silicone Cock Ring Anal Vibrator",
    "QUTOYS Dual Cock Ring Prostate Massager with 10 Vibration Modes and Remote Control",
    "QUTOYS Dual-Sided Rabbit Vibrating Cock Ring - 10-Speed Vibrations, Wireless Remote Control",
    "Screaming O Disposable Vibrating Cock Ring",
    "Silicone Stud Lasso Cock Ring",
    "Island Rings Cock Ring 3-Pack"
]
var butt_plugs=[
    "Glams Gem Butt Plug - Mini",
    "Pretty Love Beginner Mini Anal Plug Kit",
    "Anal Fantasy Collection Vibrating Perfect Plug",
    "Jelly Rancher Anal Plug Trainer Kit",
    "Anal Fantasy Collection Elite Remote Control Vibrating Butt Plug",
    "Anal Fantasy Collection Beginner's Vibrating Anal Anchor Plug"
]
var dildos=[
    "California Exotic Ramrod Gyrating Probe 8",
    "Tantus Intermediate Strap On Kit",
    "Pipedream King Cock Clear 9 inches Realistic Dildo with Balls & Suction Cup Base",
    "nsnovelties Colours Pleasures 5 inches Vibrating Dildo",
    "Adam and Eve 6 inches Hollow Strap On Dildo",
    "nsnovelties Colours Pleasures 5 inches Vibrating Dildo"
]

var strokers=[
    "Satisfyer Classic 10\" Cyberskin Masturbator",
    "FleshLight Turbo Thrust Blue Ice Masturbator",
    "Tenga Spinner Twisting Masturbator - Pixel Texture",
    "Arcwave Ghost Reversible Textured Masturbator Sleeve",
    "Tenga Aero Suction Air Pressure Masturbator With Drying Stand",
    "Kiiroo Keon Interactive Automatic Masturbator & FeelStroker Set"
]
var pennis_pumps=[
    "Pumped Deluxe Beginner Penis Pump",
    "Pump Worx Beginner's Power Pump",
    "MaleEdge Penis Enlarger Kit - Extra",
    "Optimum Series Executive Automatic Smart Pump",
    "Admiral Rechargeable Rock Hard Penis Pump & Cock Ring Kit"
]
var sex_dolls=[
    "Jesse Jane Realistic Bend Her Over Masturbator",
    "PDX Realistic Pussy and Ass Petite Masturbator",
    "PDX Vibrating Female Bent Over Butt Sex Doll",
    "PDX Interactive Dirty Talk Pussy and Ass Missionary Masturbator",
    "California Exotic The Girl Next Door Sex Doll",
    "California Exotic Naughty Neighbor Love Doll"
]
var anal_toys =[
    "Tantus Ripple Large",
    "CalExotics Colours Pleasures Trainer Kit",
    "Lovense Hush 2",
    "XL Lubricant Applicator",
    "Cute Little Fuckers",
    "Snug Plug",
    "Bootie Butt Plug"
]

 
for (var i = 0; i < 1000; i++) { 
    var price = Math.random() * (200 - 50 + 1) + 50


    let catalog = catalog_type[Math.floor(Math.random() * 3)]
    category=""
    let name="te";
    if (catalog == "Men") {
        category = men_category[Math.floor(Math.random() * 4)]
        name=getMenProductName(category)
    }else if(catalog == "Women"){
        category = women_category[Math.floor(Math.random() * 1)]
        name=getWomenProductName(category)
    }else{
        category = gay_category[Math.floor(Math.random() * 5)]
        name=getMenProductName(category)
    }
    jsonArray.push({ 
        "id": Math.floor(1000000 + Math.random() * 9999999), 
        "title": name,
        "description": "blah blah blash",
        "catalog": catalog,
        "category": category,
        "price": parseFloat( parseFloat( price ).toFixed( 2 ) ),
        "discount": Math.floor((Math.random() * 30)) ,
        "rating": Math.floor((Math.random() * 4)) +1,
        "viewers": Math.floor((Math.random() * 100)) +1,
        "image_id": "",
        "number_image": 5
    }); 
} 

function getMenProductName(category){
    if (category =='Cock Rings'){
        return cock_rings[Math.floor(Math.random() * 4)]
    }else if(category ==  'Butt Plugs'){
        return butt_plugs[Math.floor(Math.random() * 5)]
    }else if(category ==  'Strokers'){
        return strokers[Math.floor(Math.random() * 5)]
    }else if(category ==  'Pennis Pumps'){
        return pennis_pumps[Math.floor(Math.random() * 4)]
    }else if(category ==  'Dildos'){
        return dildos[Math.floor(Math.random() * 4)]
    }else if(category ==  'Sex Dolls'){
        return sex_dolls[Math.floor(Math.random() * 5)]
    }else{
        return "N/A"
    }

}

function getWomenProductName(category){
    if (category =='Vibrators'){
        return vibrators[Math.floor(Math.random() * 5)]
    }else if(category ==  'Dildos'){
        return dildos[Math.floor(Math.random() * 4)]
    }else{
        return anal_toys[Math.floor(Math.random() * 6)]
    }

}
//console.log(jsonArray) 

// converting the JSON object to a string
const data = JSON.stringify(jsonArray);

// writing the JSON string content to a file
fs.writeFile("../mongo-seed/products.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("products.json written correctly");
});