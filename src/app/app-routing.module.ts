import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { CellsComponent } from './website/church/cells/cells.component';
import { EwgComponent } from './website/ministry/ewg/ewg.component';
import { Wfc1Component } from './website/ministry/wfc1/wfc1.component';
import { Wfc2Component } from './website/ministry/wfc2/wfc2.component';
import { KkidsComponent } from './website/church/kkids/kkids.component';
import { TeensComponent } from './website/church/teens/teens.component';
import { DozComponent } from './website/church/doz/doz.component';
import { PrayerComponent } from './website/church/prayer/prayer.component';
import { MarriageComponent } from './website/family/marriage/marriage.component';
import { PremaritalComponent } from './website/family/premarital/premarital.component';
import { ParentingComponent } from './website/family/parenting/parenting.component';
import { ServeComponent } from './website/serve/serve.component';
import { CalendarComponent } from './website/church/calendar/calendar.component';
import { ContactComponent } from './website/contact/contact.component';
import { GiveComponent } from './website/give/give.component';

const routes: Routes = [
  { path: '',         component: WebsiteComponent },
  { path: 'cells',         component: CellsComponent },
  { path: 'ewg',         component: EwgComponent },
  { path: 'wfc1',         component: Wfc1Component },
  { path: 'wfc2',         component: Wfc2Component },
  { path: 'kkids',         component: KkidsComponent },
  { path: 'teens',         component: TeensComponent },
  { path: 'doz',         component: DozComponent },
  { path: 'prayer',         component: PrayerComponent },
  { path: 'marriage',         component: MarriageComponent },
  { path: 'premarital',         component: PremaritalComponent },
  { path: 'parenting',         component: ParentingComponent },
  { path: 'serve',        component:ServeComponent},
  { path: 'calendar',       component:CalendarComponent},
  { path: 'contact',        component:ContactComponent},
  { path: 'give',       component:GiveComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
],
  exports: [],
})
export class AppRoutingModule { }
