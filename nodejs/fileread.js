var fs = require('fs');

fs.readFile('sample.txt','UTF8', function(err,data){
  console.log(data);
});
