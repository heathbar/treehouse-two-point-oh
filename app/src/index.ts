import { Messenger } from './messenger';
import { Mongoose } from 'mongoose';
import { SocketIO } from './socket-io';

const mongoose = new Mongoose();
const messenger = new Messenger();

SocketIO.start(3001, messenger);
