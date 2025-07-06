// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ port: 8080 });

// let content = "";

// wss.on('connection', function connection(ws) {
//   ws.send(JSON.stringify({ type: 'update', content }));

//   ws.on('message', function incoming(message) {
//     const msg = JSON.parse(message);
//     if (msg.type === 'update') {
//       content = msg.content;
//       wss.clients.forEach(function each(client) {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(JSON.stringify({ type: 'update', content }));
//         }
//       });
//     }
//   });
// });

// console.log('WebSocket server running on ws://localhost:8080');

// const WebSocket = require('ws');

// // Use Render's dynamic port
// const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

// let currentContent = '';

// server.on('connection', socket => {
//   console.log("Client connected");

//   // Send current content to new client
//   socket.send(JSON.stringify({ type: 'update', content: currentContent }));

//   // Handle incoming messages
//   socket.on('message', message => {
//     const data = JSON.parse(message);
//     if (data.type === 'update') {
//       currentContent = data.content;

//       // Broadcast to all connected clients except sender
//       server.clients.forEach(client => {
//         if (client !== socket && client.readyState === WebSocket.OPEN) {
//           client.send(JSON.stringify({ type: 'update', content: currentContent }));
//         }
//       });
//     }
//   });

//   socket.on('close', () => {
//     console.log('Client disconnected');
//   });
// });
// last const WebSocket = require('ws');
// const http = require('http');

// // Use Render’s assigned port (or 8080 as fallback locally)
// const PORT = process.env.PORT || 8080;

// // Create HTTP server (required by WebSocket in Render)
// const server = http.createServer();

// // Create WebSocket server bound to that HTTP server
// const wss = new WebSocket.Server({ server });

// let content = "";

// wss.on('connection', function connection(ws) {
//   ws.send(JSON.stringify({ type: 'update', content }));

//   ws.on('message', function incoming(message) {
//     const msg = JSON.parse(message);
//     if (msg.type === 'update') {
//       content = msg.content;
//       wss.clients.forEach(function each(client) {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(JSON.stringify({ type: 'update', content }));
//         }
//       });
//     }
//   });
// });

// server.listen(PORT, () => {
//   console.log(`WebSocket server running on ws://localhost:${PORT}`);
// });
const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer();
const wss = new WebSocket.Server({ server });

let content = "";

wss.on('connection', function connection(ws) {
  ws.send(JSON.stringify({ type: 'update', content }));

  ws.on('message', function incoming(message) {
    const msg = JSON.parse(message);
    if (msg.type === 'update') {
      content = msg.content;
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'update', content }));
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`✅ WebSocket server running on port ${PORT}`);
});
