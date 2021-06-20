const process = require("process");
const fs = require("fs");
var path = require("path");

const dirPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(dirPath, (err, data) => {
  if (err) {
    return err;
  }
  data.forEach((file) => {
    let temp = path.extname(file);
    if (temp === `.${extension}`) {
      console.log(file);
    }
  });
});
