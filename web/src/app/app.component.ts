import { NavService } from './shared/services/nav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    navMode: string;
    navOpen: boolean;

    private socket = io(':3001');

    constructor(private navService: NavService, private router: Router) {}

    ngOnInit() {
        this.navService.getNavMode().subscribe((mode: string) => this.navMode = mode);
        this.navService.isNavOpened().subscribe((open: boolean) => this.navOpen = open);

        // subscribe to events on the server
        this.socket.on('event', (e) => {
            console.log('event:', e);
        });

        // emit event to the server
        this.socket.emit('action', {
            type: 'test',
            value: new Date()
        });
    }
    

    navigate(url: string) {
        this.router.navigate([url]);
    }
}
