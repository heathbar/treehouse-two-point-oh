import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

type CallBackFunction = (action: any, dispatchFunction: (action: any) => void) => void;

/**
 * Top level action handler.
 */
export class Messenger {
    private actions:  { [prop: string]: CallBackFunction};
    private _events: Subject<any>;

    get events() {
        return this._events.asObservable();
    }

    constructor() {
        this._events = new Subject();
        this.actions = {
            // when an action of type 'event' is received, relay it to the client
            event: (action: any) => this.relay(action.event)
        };
    }

    /**
     * Register a handler for a specific event type. (NOTE: multiple handlers for a single event type are not supported.)
     * @param type the type of action to register for
     * @param action the function to execute when the given action type has been dispatched. The function will be called with the following parameters (action: string, dispatch: Function).
     */
    on(type: string, action: CallBackFunction | null) {
        this.actions[type] = action;
    }

    dispatch(action: any) {
        if (this.actions[action.type] instanceof Function) {
            this.actions[action.type](action, this.dispatch.bind(this));
        }
    }

    /**
     * Merge all data from the specified stream into the events stream (that is ultimately sent to the client)
     * @param event the observable, promise, or object that should be merged into the stream
     */
    private relay(event: Promise<{}> | Observable<{}> | {}) {
        // merge this one with the rest
        // we probably don't want to error the whole thing if just one fails, so log for now.
        if (event instanceof Promise) {
            event.then((eventData: any) => this._events.next(eventData)).catch(console.error);
        } else if (event instanceof Observable) {
            event.subscribe(
                (eventData: any) => this._events.next(eventData),
                console.error
            );
        } else {
            this._events.next(event);
        }
    }
}
