const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");

//자고로 여기서부터는 서버를 만드는 코드랑께
let app = http.createServer((req, res) => {
  let _url = req.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
  }
  res.writeHead(200);
  res.end("hi");
});
app.listen(3000);
