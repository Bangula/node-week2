const process = require("process");
const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (data) {
    let result = data.toString().split("\n");
    console.log(result.length - 1);
  }
});
