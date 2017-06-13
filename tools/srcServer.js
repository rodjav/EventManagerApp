//import express from 'express';
//import webpack from 'webpack';
//import path from 'path';
//import config from '../webpack.config';
//import open from 'open';

var open = require('open')
var express = require('express') 
var webpack = require('webpack');//hey
var config = require('../webpack.config');
var app = express();

const path = require('../node_modules/path');
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('../node_modules/webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});