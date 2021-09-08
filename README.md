# Client Server Websocket

This project covers the distributed systems assignment that needed us to write client and a server programs to facilitate interactions using RPC techniques for the following tasks for Client and Server respectively:

Your client should be able to

1. Send your student number to the server program
2. Send your student name (first name, surname etc.) to the server program
3. Send your student faculty, course and degree to the server program
4. Send a thank you message with personal code (Innovate☺) to the server program.
5. Send all the above in one instruction to the server program

Your server should be able to

1. Ask the client program to send the student number
2. Ask the client program to send the student name (first name, surname etc.)
3. Ask the client program to send the student faculty, course and degree to the server program
4. Ask the client program to send the personal code (Innovate ☺)
5. Ask the client program to send all the above in one instruction to the server program.
6. Send the client program a message to indicate the communication succeeded or aborted.

We have four classes :

//1 BuferConverter class created for the sole purpose of converting the buffered message being sent to client back to string format for easy readability

//2 Socket Class
/\*\* @MessageParse & @CloseConn are both priavte since there is no need to call them again other than when a connection to the websocket server is established.
Any further call outside the class would lead to the backend server to crash.

@messages class variable can be public or private (boils down to preference).
\*\*/

//3 Student Class where

//4 Validator class where it validates the incoming JSON and returns relevant warnings depending on missing fields
\*\*/

we also have the user interface where we capture a users input in the views subfolder located in the public folder directory.

To get the program up and running (after download or clone) by:

1. Run npm install
   (downloads all project dependancies)
   Generates package-lock.json
2. Run npm start
3. navigate to port 5000 on your local browser to query inputs and view the results on your terminal.
