var io = require('socket.io-client')
var client = io.connect("http://localhost:3000", { 'force new connection' : true})


var tok="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlcjMiLCJyb29tIjoidGVzdCIsImlhdCI6MTQ0OTI4NjUwMX0.d5UgdYO8EeRfH63ydZiZfCaeZ0u-FZMJk_VWPx5WBeE"

client.on('connect', function () {
    client.emit('authenticate', {token: tok});
});

client.on('restart', function(channel) {
    console.log("client restartd")
});

client.on('disconnect', function() {
    console.info('SOCKET [%s] DISCONNECTED', client.id);
});



client.on('room_msg', function(data) {
    console.log(data)
    console.log("room_msg")
});


client.on('gg', function(data) {
    console.log(data)
    console.log("specific message")
});


setTimeout(function() {
    client.emit('test', {test: "data"});
    console.log("emit test")
}, 5000);