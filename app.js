var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/1/', routes);

module.exports = app;
