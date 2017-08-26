import { Mongoose } from 'mongoose';
import { SocketIO } from './socket-io';

const mongoose = new Mongoose();

SocketIO.start(3001);
