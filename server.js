let express = require('express');
let app = express();
let https = require('https');
let fs = require('fs');

options = {
    cert: fs.readFileSync('config/sert/server.crt'),
    key: fs.readFileSync('config/sert/server.key')
};

app.get('/test', function (req, res) {
    console.log(req.body);
    res.send('get ok');
});

app.post('/test', function (req, res) {
    console.log(req.body);
    res.send('post ok');
});

let server = https.createServer(options, app);

server.listen(8443, function () {
    console.log("server running at https://localhost:8443/")
});