var request = require("request");
var fs = require("fs");
const URL = process.argv[2];
const FILE = './myPage2'

//Without error handling:

// // HTTP GET Request
// request(URL)
//     // Write File
//     .pipe(fs.createWriteStream(FILE));


//One way with error handling:

// request(URL, function(err, response, body){
//   if(err){
//     console.log("Error: " + err);
//   } 
// })
//   .pipe(fs.createWriteStream(FILE))


//Another way with error handling:

  request(URL)
    .on('error', function(err){
      console.log("My Error" + err);
    })
    .pipe(fs.createWriteStream(FILE));