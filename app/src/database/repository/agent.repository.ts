import { RepositoryBase } from './base.repository';
import { Agent } from '../model/agent.interface';
import { AgentSchema } from '../schemas/agent.schema';

export class AgentRepository extends RepositoryBase<Agent> {
    constructor() {
        super(AgentSchema);
    }
}
