import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const socketConnection = socket.on("connect", () => {
  console.log("socket.id");
});

const notificationSocket = socketConnection.on("notification", () => {
  console.log("hi");
});

export default notificationSocket;
