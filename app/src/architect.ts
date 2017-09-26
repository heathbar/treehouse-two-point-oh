import { Agent } from './database/model/agent.interface';
import * as Dockerode from 'dockerode';

/**
 * The architect handles downloading/starting/stoping agents, each in their own docker container
 */

export class Architect {
    dockerode: Dockerode;

    constructor() {
        this.dockerode = new Dockerode({socketPath: '/var/run/docker.sock'});
    }
    startAgent(agent: Agent) {
        // TODO: real implementation

        // list containers names + addresses
        this.dockerode.listContainers().then((containers: Dockerode.ContainerInfo[]) => {
            containers.forEach((container: Dockerode.ContainerInfo) => {
                console.log(container.Names);
                Object.keys(container.NetworkSettings.Networks).forEach((key: string) => {
                    console.log(container.NetworkSettings.Networks[key].IPAddress);
                });
            });
        });
    }
}
