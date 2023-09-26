const express = require("express"); //web application framework for node.js
const app = express(); // Import the 'http' module and store it in the 'http' constant
const http = require("http");
const { Server } = require("socket.io"); // Imports the 'Server' class from the 'socket.io' module and store it in the 'io' constant
const cors = require("cors"); //helps with connection errors

app.use(cors()); //enabling cors for requests
const server = http.createServer(app);

// Create a new instance of 'socket.io' and attach it to the HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log(`USER CONNECTED: ${socket.id}`);

  // Handle the 'drawingEvent' from the client
  socket.on('drawingEvent', (data) => {
    // Broadcast the drawing event to all connected clients (except the sender)
    socket.broadcast.emit('drawingEvent', data);
    console.log(`User is drawing: ${socket.id}`);
  });
});

// Start the server and make it listen on port 3001
server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
