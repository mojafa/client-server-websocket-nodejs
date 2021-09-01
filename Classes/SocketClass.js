/**
 * @MessageParse & @CloseConn are both priavte since there is no need to
 * call them again other than when a connection to the websocket server
 * is established.
 *
 * Any further call outside the class would lead to the backend server
 * to crash.
 *
 * @messages class variable can be public or private (boils down to
 * preference).
 */

const BufferConverterToString = require("./BufferConverter");
const Validator = require("./Validator");

let buff = new BufferConverterToString();
let validator = new Validator();

class SocketClass {
  #messages = ["Start Conversing!!"];
  constructor(socketServer, WebSocket) {
    this.WebSocket = WebSocket;
    this.socketServer = socketServer;
  }

  onConnected() {
    this.socketServer.on("connection", (socketClient) => {
      console.log("Connected");
      console.log("client Set length: ", this.socketServer.clients.size);
      socketClient.send(JSON.stringify(this.#messages));

      socketClient.on("message", (message) => this.#MessageParse(message));

      socketClient.on("close", () => this.#CloseConn());
    });
  }

  /**
   * Recieves message and sends to client
   * prints to console recieved message
   *
   */

  #MessageParse(message) {
    console.log(message === undefined ? "" : `Message Recieved: ${message}`);

    const { valid, errors } = validator.validateJSONData(message);

    this.socketServer.clients.forEach((client) => {
      if (client.readyState === this.WebSocket.OPEN) {
        try {
          if (valid) {
            client.send(JSON.stringify(buff.convertToJSON(message)));
          } else {
            let response = {
              errors,
              message: "Error",
            };

            client.send(JSON.stringify(response));
          }
        } catch (e) {
          console.log(`${e.message}`);
        }
      }
    });
  }

  /**
   * After socket connection is closed
   */
  #CloseConn(socketServer) {
    console.log("Closed");
    console.log("Number of Clients: ", socketServer.clients.size);
  }
}

module.exports = SocketClass;
