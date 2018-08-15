var http = require('http');
var translate = require('google-translate-api');
var express = require("express");
var express = require('express');
var app = express();
app.listen(3002);

console.log('Listening on port 3002...');

app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});

app.get('/abc/:xyz', function(req, res) {
  res.set({"Content-Type": "text/plain; charset=utf-8"})
  res.setEncoding
  console.log(req.param("xyz"));
  translateText(req.param("xyz"), "hi", res)
});

var translateText = function(text, tolang, httpResponse) {
   translate(text, {to: tolang}).then(res => {
        convertedText = res.text;
        httpResponse.send(convertedText);
    }).catch(err => {
        console.error(err);
    });
}



