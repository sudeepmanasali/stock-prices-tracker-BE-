// this file is used for creating the real time data
// communication between the FE and BE apps

import { Server } from "socket.io";
import { corsConfig } from "./constants";
let io: any;

// to intialize the socket server
export const init = (httpServer: any) => {
  io = new Server(httpServer, {
    cors: corsConfig
  });
  return io;
}

export const getIo = () => {
  if (!io) {
    throw new Error("Socket.io is not initialized..!");
  }
  return io;
}
