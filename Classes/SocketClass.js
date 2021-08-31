class SocketClass {
  messages = ["Start Conversing!!"];
  constructor(socketServer, WebSocket) {
    this.WebSocket = WebSocket;
    this.socketServer = socketServer;
  }

  onConnected() {
    this.socketServer.on("connection", (socketClient) => {
      console.log("Connected");
      console.log("client Set length: ", this.socketServer.clients.size);
      socketClient.send(JSON.stringify(this.messages));

      socketClient.on("message", (message) => this.MessageParse(message));

      socketClient.on("close", () => this.CloseConn());
    });
  }

  /**
   * Recieves message and sends to client
   * prints to console recieved message
   */

  MessageParse(message) {
    console.log(message === undefined ? "" : `Message Recieved: ${message}`);
    this.socketServer.clients.forEach((client) => {
      if (client.readyState === this.WebSocket.OPEN) {
        client.send(JSON.stringify([message.toString("utf-8")]));
      }
    });
  }

  /**
   * After socket connection is closed
   */
  CloseConn(socketServer) {
    console.log("Closed");
    console.log("Number of Clients: ", socketServer.clients.size);
  }
}

module.exports = SocketClass;
