import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

@Injectable()
export class AppService {

    private socket = io(':3001');
    private eventStream: Subject<any>;

    constructor() {
        this.eventStream = new Subject();
        this.socket.on('event', (e) => {
            this.eventStream.next(e);
        });
    }

    get events(): Observable<any> {
        return this.eventStream.asObservable();
    }

    public publish(event: any) {
        this.socket.emit('action', event);
    }
}
