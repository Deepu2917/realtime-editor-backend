const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

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

console.log('WebSocket server running on ws://localhost:8080');
