var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function(req, res){
	res.sendFile(__dirname + '/1index.html');
});

server.listen(3000, function(){
	console.log("Starting server");
});

io.on('connection', function(socket){
	console.log('New user!');
	socket.on('disconnect', function(){
		console.log("User disconnect!");
	});
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



