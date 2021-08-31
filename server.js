const express = require("express");
const path = require("path");
const WebSocket = require("ws");
const SocketClass = require("./Classes/SocketClass");

const app = express();
const socketServer = new WebSocket.Server({ port: 8080 });
const _socket = new SocketClass(socketServer, WebSocket);

/**
 * Establish initial connection
 * to websocket server and perform abstructed operations
 */
_socket.onConnected();

/**
 * Enable frontend static file access
 */

app.use("/static", express.static("./public/static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
