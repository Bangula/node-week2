const http = require("http");
const process = require("process");
const url = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const {
    query: { iso },
    pathname,
  } = url.parse(req.url, true);
  console.log(iso, pathname);

  let date = new Date(iso);

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let milliseconds = new Date(iso.replace("T", " ")).getTime();

  if (req.method === "GET" && iso) {
    if (pathname === "/api/parsetime") {
      res.end(JSON.stringify({ hour, minute, second }));
    } else if (pathname === "/api/unixtime") {
      res.end(JSON.stringify({ unixtime: milliseconds }));
    } else res.end("\r\n");
  } else return res.end("\r\n");
});

server.listen(port, () => console.log(`Server is running on port: `, port));
