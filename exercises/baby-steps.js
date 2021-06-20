const process = require("process");

const args = [...process.argv].slice(2, process.argv.length);
let sum = args.reduce((total, num) => {
  return Number(total) + Number(num);
});
console.log(sum);
