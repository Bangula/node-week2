const fs = require("fs");
const path = require("path");

module.exports = function (dirPath, extension, callback) {
  fs.readdir(dirPath, (err, data) => {
    let arr = [];
    if (err) {
      return callback(err);
    }
    data.forEach((file) => {
      let temp = path.extname(file);
      if (temp === `.${extension}`) {
        arr.push(file);
      }
    });
    return callback(null, arr);
  });
};
