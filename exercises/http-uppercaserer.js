const http = require("http");
const process = require("process");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  let data = "";
  res.setHeader("Content-Type", "text/plain");
  if (req.method === "POST") {
    console.log(req.method);
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      console.log(data.toUpperCase()); // 'Buy the milk'
      res.end(data.toUpperCase());
    });
  } else res.end();
});

server.listen(port, () => console.log(`Server is running on port: ${port}`));
