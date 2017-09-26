import { RepositoryBase } from './base.repository';
import { AgentInterface } from '../model/agent.interface';
import { AgentSchema } from '../schemas/agent.schema';

export class AgentRepository extends RepositoryBase<AgentInterface> {
    constructor() {
        super(AgentSchema);
    }
}
