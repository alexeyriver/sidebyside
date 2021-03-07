import app from "./app.js";
import http from 'http'

import {Server} from "socket.io";
import {messageHandler} from "./sockets/messageHandler.js";
import {usersHandler} from "./sockets/usersHandler.js";

const port = process.env.PORT || 4000
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    console.log('connected!');
    const { roomID } = socket.handshake.query;
    socket.roomID = roomID;
    socket.join(roomID);

    messageHandler(io, socket);
    usersHandler(io, socket);

    socket.on('disconnect', () => {
        console.log('disconnected');
        socket.leave(roomID);
    });
});




server.listen(port,() => {
    console.log(`Server is running on ${port}`)
})
