var io = require('socket.io-client')
var client = io.connect("http://localhost:3000", { 'force new connection' : true})


client.on('connect', function () {
  client.emit('authenticate', {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NDkyODQ0Mzd9.5Bi0h_QlUSV8GUOupsKzh_zTSMYcB-gF-RYYV0xiqxo"});
});

client.on('restart', function(channel) {
  console.log("client restartd")
});

client.on('disconnect', function() {
  console.info('SOCKET [%s] DISCONNECTED', client.id);
});


setTimeout(function() {
  client.emit('test', {test: "data"});
  client.emit('authenticate', {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NDkyODQ0Mzd9.5Bi0h_QlUSV8GUOupsKzh_zTSMYcB-gF-RYYV0xiqxo"});
  console.log("emit test")
}, 5000);