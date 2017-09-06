import { AppService } from './shared/services/app.service';
import { NavService } from './shared/services/nav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    navMode: string;
    navOpen: boolean;

    constructor(private appService: AppService, private navService: NavService, private router: Router) {}

    ngOnInit() {
        this.navService.getNavMode().subscribe((mode: string) => this.navMode = mode);
        this.navService.isNavOpened().subscribe((open: boolean) => this.navOpen = open);

        this.appService.events.subscribe((e) => {
            console.log(e);
        });

        // emit event to the server
        this.appService.publish({
            type: 'test',
            value: new Date()
        });
    }

    navigate(url: string) {
        this.router.navigate([url]);
    }
}
