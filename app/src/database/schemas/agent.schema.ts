import { DataAccess } from '../data-access';
import { AgentInterface } from '../model/agent.interface';
import { Schema, Model, model} from 'mongoose';
import { AgentModel } from '../model/agent.model';

const schema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});

export const AgentSchema: Model<AgentInterface> = model<AgentInterface>('Agents', schema);
