var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var http = require('http');

const app = express();

/*FOR API ROUTES*/
const api = require('./api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

// API Location
app.use('/api', api);

const port = process.env.PORT || 3001;
app.set('port', port);

// Server
const server = http.createServer(app);

/*FOR SET CONNECTION PORT*/
server.listen(port,  () => console.log(`Running on localhost:${port}`));
    
module.exports = app;