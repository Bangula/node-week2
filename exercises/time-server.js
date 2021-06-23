const net = require("net");
const process = require("process");

const port = process.argv[2];

const server = net.createServer(function (socket) {
  const zeroFill = (value) => {
    return value.toString().length === 1 ? `0${value}` : value;
  };
  console.log("client connected");
  let date = new Date();
  let year = date.getFullYear();
  let month = zeroFill(date.getMonth() + 1);
  let day = zeroFill(date.getDate());
  let hours = zeroFill(date.getHours());
  let minutes = zeroFill(date.getMinutes());

  socket.write(`${year}-${month}-${day} ${hours}:${minutes}`);
  socket.end("\r\n");
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
