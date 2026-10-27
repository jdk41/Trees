// Third-Place-App/index.js
//connects to express.js for Socket.io to work with the server
    //Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 5).
    // We define a route handler / that gets called when we hit our website home.
    // We make the http server listen on port 3000
const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

