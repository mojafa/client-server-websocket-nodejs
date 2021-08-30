class SocketClass {
  constructor() {}

  onConnected(socketServer, socketClient, messages) {
    console.log("Connected");
    console.log("client Set length: ", socketServer.clients.size);
    socketClient.send(JSON.stringify(messages));
  }

  MessageParse(message, socketServer, WebSocket) {
    console.log(`Message Recieved: ${message}`);
    socketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([message.toString("utf-8")]));
      }
    });
  }

  CloseConn(socketServer) {
    console.log("Closed");
    console.log("Number of Clients: ", socketServer.clients.size);
  }
}

module.exports = SocketClass;
