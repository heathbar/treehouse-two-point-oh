import { NgModule } from '@angular/core';
import {
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdChipsModule,
    MdSlideToggleModule,
    MdCardModule,
    MdSliderModule,
    MdProgressSpinnerModule,
    MdProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdChipsModule,
        MdSlideToggleModule,
        MdCardModule,
        MdSliderModule,
        MdProgressSpinnerModule,
        MdProgressBarModule
    ],
    exports: [
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdChipsModule,
        MdSlideToggleModule,
        MdCardModule,
        MdSliderModule,
        MdProgressSpinnerModule,
        MdProgressBarModule
    ]
})
export class MaterialModule { }
