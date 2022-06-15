/**
 * Import the necessary default modules in Node for the server
 * The http module, file system and path modules are imported
 * using the require syntax
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

//create the server
const server = http.createServer((request, response) => {
  //use the path manager to obtain the path to the .html files.
  //the ternary operator checks the type of url been loaded
  //if the url is blank. If it is not, it loads up the entered url
  let urlPick =
    request.url === "/"
      ? "index.html"
      : request.url === "/home"
      ? "index.html"
      : request.url;

  let filePath = path.join(__dirname, "public", urlPick);

  fs.readFile(filePath, "utf8", (err, content) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(content);
  });
});

//set the port
const port = 4000;

//set the port for node to listen at
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
