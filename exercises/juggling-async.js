const http = require("http");
const process = require("process");
const bl = require("bl");

let urls = [process.argv[2], process.argv[3], process.argv[4]];

function getData(url, index) {
  return new Promise((resolve) => {
    http.get(url, (response) => {
      return response.pipe(
        bl(function (err, data) {
          if (err) {
            return console.log(err);
          }
          let result = data.toString();
          resolve(result);
        })
      );
    });
  });
}

let url1 = getData(urls[0]);
let url2 = getData(urls[1]);
let url3 = getData(urls[2]);

Promise.all([url1, url2, url3]).then((result) => {
  result.forEach((item) => console.log(item));
});

// official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
