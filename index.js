var express = require("express");
var socket = require("socket.io");

var app = express();

var server = app.listen(4000, function () {
  console.log("listening to request on port 4000.");
});

app.use(express.static("public"));

// socket setup
var io = socket(server); //* Declaring socket to use the already existing "server" as a server.

//* this will listen for a connection made to the socket from a browser.
io.on("connection", function (socket) {
  console.log("made socket connection successfully:", socket.id);
  console.count("Socket connection count");
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });
});
