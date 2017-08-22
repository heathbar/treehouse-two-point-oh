import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Injectable()
export class NavService {
    private activeMediaQuery = '';
    private navOpened: BehaviorSubject<boolean>;
    private navMode: BehaviorSubject<string>;
    private navEnabled: BehaviorSubject<boolean>;

    constructor(media: ObservableMedia) {

        this.navEnabled = new BehaviorSubject(true);
        this.navOpened = new BehaviorSubject(true);
        this.navMode = new BehaviorSubject('side');
        
        media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
        
            if ((change.mqAlias == 'xs' || change.mqAlias == 'sm')) {
                this.navOpened.next(false);
                this.navMode.next('over');
            } else {
                this.navOpened.next(true);
                this.navMode.next('side');
            }
        });
    }

    isNavOpened(): Observable<boolean> {
        // return true if enabled && opened, otherwise false
        return Observable.combineLatest(
            this.navEnabled.asObservable(),
            this.navOpened.asObservable()
        ).map(([enabled, opened]) => enabled && opened);        
    }

    getNavMode(): Observable<string> {
        return this.navMode.asObservable();
    }

    openMenu() {
        this.navOpened.next(true);
    }

    // Close menu if appropriate
    closeMenu() {
        this.navMode.take(1).forEach((mode: string) => {
            if (mode === 'over') {
                this.navOpened.next(false);
            }
        });
    }

    setEnabled(enabled: boolean) {
        this.navEnabled.next(enabled);
    };
}
