const fs = require('fs');
const path = require('path');

const checkJsFile = (__dirname) => {
    if (path.extname(__dirname) == '.js'){
        console.log(path.join(__dirname));
    } 
};

const a  = "./test"

fs.stat(a, (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      if(stats.isFile()) console.log("is a file");
      else if(stats.isDirectory())console.log("is a directory");
    }
});
console.log("-------------------------");
fs.readdir(a, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if(checkJsFile(file)) console.log(file);
      })
    }
  })

