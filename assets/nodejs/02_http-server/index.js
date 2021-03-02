const http = require("http");

const config = {
  PORT: 3000
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Home Page</h1>");
  res.write("<div>Hello from my Node.js Server!</div>");
  res.end();
});

server.listen(config.PORT, () => {
  console.log(`Server listening at http://localhost:${config.PORT}`);
});