require('dotenv').config();
const cors=require('cors'),
	massive=require('massive'),
	{json}=require('body-parser'),
	app=require('express')();
	server=require('http').createServer(app),
	io=require('socket.io')(server),
	port = 3001;

app.use(cors());
app.use(json());


massive(process.env.CONNECTION_STRING).then(dbinstance=>{
	app.set('db',dbinstance);
});

//socket stuff
io.on('connect',socket=>{
	console.log('connect');
})

server.listen(port,()=>{
	console.log(`app is listening on port ${port}`);
})


