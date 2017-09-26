import { Messenger } from './messenger';
import { SocketIO } from './socket-io';
import { Agent } from './database/model/agent.interface';
import { AgentModel } from './database/model/agent.model';
import { AgentRepository } from './database/repository/agent.repository';
import * as mongoose from 'mongoose';
import { DataAccess } from './database/data-access';
import { Architect } from './architect';

// make mongoose use ES6 promises
(mongoose as any).Promise = global.Promise;

const messenger = new Messenger();
SocketIO.start(3001, messenger);

DataAccess.connect().then(() => {
    const repo = new AgentRepository();

    repo.retrieve((erro: any, res: AgentModel[]) => {
        res.forEach((item: AgentModel) => {
            console.log(item);
        });
    });

    function populateTheDb() {
        const a: Agent = {
            name: 'MQTT',
            active: true
        } as any;

        const b: Agent = {
            name: 'Wemo',
            active: false
        } as any;

        repo.create(a, null).then(console.log);
        repo.create(b, null).then(console.log);
    }
});

const architect = new Architect();
architect.startAgent(null);
