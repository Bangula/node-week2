const process = require("process");
const mymodule = require("./mymodule.js");

const dirPath = process.argv[2];
const extension = process.argv[3];

mymodule(dirPath, extension, (err, data) => {
  if (err) return console.log(err);
  if (data.length) {
    data.forEach((item) => console.log(item));
  }
});
