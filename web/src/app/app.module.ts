import { AppService } from './shared/services/app.service';
import { NavService } from './shared/services/nav.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { ConfigModule } from "./config/config.module";

import 'hammerjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        AppRoutingModule,
        ConfigModule
    ],
    providers: [
        AppService,
        NavService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
