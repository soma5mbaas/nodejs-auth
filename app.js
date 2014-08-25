var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', routes);

process.on('uncaughtException', function(error) {
	console.log(error);
});

module.exports = app;
