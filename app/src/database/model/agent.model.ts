import { AgentInterface } from './agent.interface';

export class AgentModel {

    private agent: AgentInterface;

    constructor(agent: AgentInterface) {
        this.agent = agent;
    }

    get name(): string {
        return this.agent.name;
    }

    get active(): boolean {
        return this.agent.active;
    }
}
