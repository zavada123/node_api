const http = require("http");
const fs = require("fs");
const path = require('path');
var peopleAPi = null;

const server = http.createServer((req, res) => {

    var usersFilePath = path.join(__dirname, 'api.json');

    if (req.url === "/people") {
        res.writeHead(200, { "Content-Type": "application/json" });
        var readable = fs.createReadStream(usersFilePath);
        readable.pipe(res);
    }
}); 

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server succesfully started, listening on 3000 port");
}); 