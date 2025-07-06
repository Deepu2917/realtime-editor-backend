# 🧑‍💻 Real-Time Collaborative tool

This is a real-time collaborative code editor built with **HTML, CSS, JavaScript**, and **WebSocket (Node.js backend)**. It allows multiple users to write and edit code simultaneously — just like Google Docs, but for code!

----
## 🛠️ Features

- Real-time collaborative editing
- Built with CodeMirror for rich code editing
- WebSocket-powered communication (via Node.js)
- Lightweight and responsive UI

---

## 📁 Project Structure

```bash
realtime-editor/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js  # Connects to WebSocket and handles CodeMirror
├── backend/

│   ├── server.js  # WebSocket server
│   └── package.json

