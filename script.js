const socket = new WebSocket('ws://localhost:8080');

let editor = CodeMirror(document.getElementById('editor'), {
  lineNumbers: true,
  mode: "javascript",
  theme: "default"
});

editor.on('change', () => {
  const content = editor.getValue();
  socket.send(JSON.stringify({ type: 'update', content }));
});

socket.onmessage = function (event) {
  const message = JSON.parse(event.data);
  if (message.type === 'update' && message.content !== editor.getValue()) {
    const cursor = editor.getCursor(); 
    editor.setValue(message.content);
    editor.setCursor(cursor);
  }
};

