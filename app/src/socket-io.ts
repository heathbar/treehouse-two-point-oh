import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as SocketIOServer from 'socket.io';

export class SocketIO {
    public static start(port: number) {
        const io = SocketIOServer().attach(port);
        console.log(`WebSocket started on port ${port}`);

        io.on('connection', (socket: SocketIO.Socket) => {
            socket.emit('event', `Congratulations, you've connected.`);
        });
    }
}
