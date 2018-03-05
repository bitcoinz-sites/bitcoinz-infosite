var express = require('express');
var path = require('path');
var app = express();
var https = require('https');
var fs = require('fs');
var settings = require('./libs/settings');

// Self-signed SSL certs
// created with 'openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout info.btcz.rocks.key -out info.btcz.rocks.crt'

var key = fs.readFileSync('certs/info.btcz.rocks.key');
var cert = fs.readFileSync('certs/info.btcz.rocks.crt');

var options = {
  key: key,
  cert: cert
};

// set view engine to PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// serve views/index.pug as home page
app.get('/', function (req, res) {
  res.render('index', { title: settings.title })
});

// parse 'public' folder to contain scripts, css, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Locals
app.set('panels', settings.panels);
app.set('title', settings.title);



/* ---comment out for testing PUG
app.use(express.static(__dirname + '/public/css'));
//Store all CSS in css folder

app.use(express.static(__dirname + '/public/images'));
//Store all IMAGES in images folder

app.use(express.static(__dirname + '/public'));
//Store all HTML files in public folder.

app.use(express.static(__dirname + '/public/scripts'));
//Store all JS and /public/scripts folder.



app.get('/',function(req,res){
 res.sendFile('index.html');
  //It will find and locate index.html from public
});
*/

https.createServer(options, app).listen(3001);


app.listen(3000, function () {
    console.log('Example app listening on port 3000')
});
