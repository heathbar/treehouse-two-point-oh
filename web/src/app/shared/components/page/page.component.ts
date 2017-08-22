import { NavService } from './../../services/nav.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'th-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {
    @Input() disableMenu: boolean;

    constructor(private navService: NavService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.disableMenu) {
            this.navService.setEnabled(!changes.disableMenu.currentValue);
        }
    }

    openMenu() {
        this.navService.openMenu();
    }
}
