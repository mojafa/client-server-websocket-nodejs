const express = require("express");
const path = require("path");
const WebSocket = require("ws");

const app = express();
const socketServer = new WebSocket.Server({ port: 8080 });
const clients = new Set();

const messages = ["Start Conversing!!"];

socketServer.on("connection", (socketClient) => {
  clients.add(WebSocket);
  console.log("Connected");
  console.log("client Set length: ", socketServer.clients.size);
  socketClient.send(JSON.stringify(messages));

  socketClient.on("message", (message) => {
    console.log(`Message Recieved: ${message}`);
    socketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([message.toString("utf-8")]));
      }
    });
  });

  socketClient.on("close", (socketClient) => {
    console.log("Closed");
    console.log("Number of Clients: ", socketServer.clients.size);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
