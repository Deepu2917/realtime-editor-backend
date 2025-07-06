// //const socket = new WebSocket('ws://localhost:8080');

// // const socket = new WebSocket("wss://your-server-name.onrender.com");
// //const socket = new WebSocket('wss://realtime-editor-backend.onrender.com');
// //const socket = new WebSocket('wss://realtime-editor-backend.onrender.com/');
// const socket = new WebSocket('ws://realtime-editor-backend-055w.onrender.com');

// let editor = CodeMirror(document.getElementById('editor'), {
//   lineNumbers: true,
//   mode: "javascript",
//   theme: "default"
// });

// editor.on('change', () => {
//   const content = editor.getValue();
//   socket.send(JSON.stringify({ type: 'update', content }));
// });

// socket.onmessage = function (event) {
//   const message = JSON.parse(event.data);
//   if (message.type === 'update' && message.content !== editor.getValue()) {
//     const cursor = editor.getCursor(); 
//     editor.setValue(message.content);
//     editor.setCursor(cursor);
//   }
// };


// ✅ Correct WebSocket URL — secure 'wss://' and full domain
const socket = new WebSocket('wss://realtime-editor-backend-055w.onrender.com');

let editor = CodeMirror(document.getElementById('editor'), {
  lineNumbers: true,
  mode: "javascript",
  theme: "default"
});

// Send changes to server
editor.on('change', () => {
  const content = editor.getValue();
  socket.send(JSON.stringify({ type: 'update', content }));
});

// Receive updates from server
socket.onmessage = function (event) {
  const message = JSON.parse(event.data);
  if (message.type === 'update' && message.content !== editor.getValue()) {
    const cursor = editor.getCursor();
    editor.setValue(message.content);
    editor.setCursor(cursor);
  }
};
