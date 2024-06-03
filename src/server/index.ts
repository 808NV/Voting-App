import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  const { id } = socket;

  socket.on("join-room", async (room: string) => {
    console.log("user joined room:", room);
  });
});

const port = 8000;

server.listen(port, () => {
  console.log("listening on port");
});
