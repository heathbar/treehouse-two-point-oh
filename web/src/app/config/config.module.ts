import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [WelcomeComponent]
})
export class ConfigModule { }
