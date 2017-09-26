import { Document } from 'mongoose';

export interface AgentInterface extends Document {
    name: string;
    active: boolean;
}
