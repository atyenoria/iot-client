var io = require('socket.io-client')
var client = io.connect("http://localhost:3000", { 'force new connection' : true})


var tok="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlcjEiLCJyb29tIjoidGVzdCIsImlhdCI6MTQ0OTI4NjUwMX0.TpHuRcKZGVeCDHZNkr9Dm47JwCu25THOnPQ1OhIArgU"

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
}, 1500);




