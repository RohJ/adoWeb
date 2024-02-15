import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

import { WebsiteComponent } from './website.component';
import { CellsComponent } from './church/cells/cells.component';
import { EwgComponent } from './ministry/ewg/ewg.component';
import { Wfc1Component } from './ministry/wfc1/wfc1.component';
import { Wfc2Component } from './ministry/wfc2/wfc2.component';
import { KkidsComponent } from './church/kkids/kkids.component';
import { TeensComponent } from './church/teens/teens.component';
import { DozComponent } from './church/doz/doz.component';
import { PrayerComponent } from './church/prayer/prayer.component';
import { MarriageComponent } from './family/marriage/marriage.component';
import { PremaritalComponent } from './family/premarital/premarital.component';
import { ParentingComponent } from './family/parenting/parenting.component';
import { ServeComponent } from './serve/serve.component';
import { CalendarComponent } from './church/calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { GiveComponent } from './give/give.component';
import { SermonsComponent, SafeHtmlPipe } from './sermons/sermons.component';

import { authInterceptorProviders } from '../_helpers/auth.interceptor';




@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        GoogleMapsModule
    ],
    declarations: [
        WebsiteComponent,
        CellsComponent,
        EwgComponent,
        Wfc1Component,
        Wfc2Component,
        KkidsComponent,
        TeensComponent,
        DozComponent,
        PrayerComponent,
        MarriageComponent,
        PremaritalComponent,
        ParentingComponent,
        ServeComponent,
        CalendarComponent,
        ContactComponent,
        GiveComponent,
        SermonsComponent,
        SafeHtmlPipe
    ],
    exports:[ WebsiteComponent ],
    providers: [ authInterceptorProviders ]
})
export class WebsiteModule { }
