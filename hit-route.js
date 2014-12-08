var j5 = require("johnny-five");
var express = require('express');
require("./my_ip.js")

var myBoard, myLed;
var app = express()

myBoard = new j5.Board();

var ledOn = function() {
  myLed = new j5.Led(13)
  myLed.on();

  myBoard.repl.inject({
    led: myLed
  });
}

var ledOff = function() {
  myLed = new j5.Led(13)
  myLed.off();

  myBoard.repl.inject({
    led: myLed
  });
}

app.get('/', function (req, res) {
  res.redirect("/off.html")
})

app.get('/on', function (req, res) {
  ledOn();
  res.send()
})

app.get("/off", function (req, res) {
  ledOff();
  res.send()

})

app.use(express.static(__dirname + '/public'));

app.listen(3000);
