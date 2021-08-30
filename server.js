const express = require("express");
const path = require("path");
const WebSocket = require("ws");
const SocketClass = require("./Classes/SocketClass");

const app = express();
const socketServer = new WebSocket.Server({ port: 8080 });
const _socket = new SocketClass();

const messages = ["Start Conversing!!"];

socketServer.on("connection", (socketClient) => {
  console.log("Connected");
  console.log("client Set length: ", socketServer.clients.size);
  socketClient.send(JSON.stringify(messages));

  socketClient.on("message", (message) =>
    _socket.MessageParse(message, socketServer, WebSocket)
  );

  socketClient.on("close", (socketClient) => _socket.CloseConn(socketServer));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
