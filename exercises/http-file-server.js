const http = require("http");
const fs = require("fs");
const process = require("process");

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
  readStream.pipe(res);
});

server.listen(port, () => console.log(`Server is running on port: ${port}`));
