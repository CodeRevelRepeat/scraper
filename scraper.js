var http = require('http');
var fs = require('fs');
const URL = process.argv[2];
const PATH = './myPage';


var file = fs.createWriteStream(PATH);


http.get(URL, function(response){
  response.on('error', console.error)
  response.on('data', function(data){
    // console.log(data.toString());
    file.write(data.toString());
  })
 })
.on('error', function(e){
  console.log('problem with request: ' + e.message);
})



