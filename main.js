var io = require('socket.io-client')
var client = io.connect("http://localhost:3000", { 'force new connection' : true})


var tok="eyJhbGciOiJIUzI1NiIsIm5vbmUiOiI1NjYyNjg2NWRkZTg0NDcwNjAzNTc2NzYiLCJ0eXAiOiJKV1QifQ.eyJBZ2UiOjExLCJHZW5kZXIiOiJmZmYiLCJJZCI6IjU2NjI2ODY1ZGRlODQ0NzA2MDM1NzY3NiIsIk5hbWUiOiJhc2RmYSIsImV4cCI6MTQ0OTU0OTg5M30.yrhf_NUv3D2rkUxjAOXP-GTE-3fI8Nzpz1fnbFJYA9c"

client.on('connect', function () {
  client.emit('authenticate', {token: tok});
});

client.on('restart', function(channel) {
  console.log("client restartd")
});

client.on('disconnect', function() {
  console.info('SOCKET [%s] DISCONNECTED', client.id);
});


setTimeout(function() {
  client.emit('test', {test: "data"});
  console.log("emit test")
  client.emit('room', [{msg: "hello"},{room: "test"}]);

  client.emit('id msg', [{msg: "hello"},{id: "m-hawkNTV8pVY1BmAAAE"}]);
  client.emit('create msg', [{msg: "hello"},{id: "m-hawkNTV8pVY1BmAAAE"}]);

}, 1500);




