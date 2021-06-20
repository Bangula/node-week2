const http = require("http");
const process = require("process");
const bl = require("bl");

http.get(process.argv[2], (response) => {
  return response.pipe(
    bl(function (err, data) {
      if (err) {
        return console.log(err);
      }
      data = data.toString();
      console.log(data.length);
      return console.log(data);
    })
  );
});
