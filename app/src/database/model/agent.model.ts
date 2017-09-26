import { Agent } from './agent.interface';

export class AgentModel {

    private agent: Agent;

    constructor(agent: Agent) {
        this.agent = agent;
    }

    get name(): string {
        return this.agent.name;
    }

    get active(): boolean {
        return this.agent.active;
    }
}
