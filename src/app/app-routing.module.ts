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
import { SermonsComponent } from './website/sermons/sermons.component';
import { StaffComponent } from './website/about/staff/staff.component';
import { StoryComponent } from './website/about/story/story.component';
import { BeliefsComponent } from './website/about/beliefs/beliefs.component';
import { EwgregisterComponent } from './website/forms/ewgregister/ewgregister.component';
import { Wfc1registerComponent } from './website/forms/wfc1register/wfc1register.component';
import { Wfc2registerComponent } from './website/forms/wfc2register/wfc2register.component';
import { ResponseComponent } from './website/response/response.component';
import { CampusComponent } from './website/campus/campus.component';
import { YouthComponent } from './website/church/youth/youth.component';
import { PolicyComponent } from './website/policy/policy.component';


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
  { path: 'sermons',       component:SermonsComponent},
  { path: 'staff',       component:StaffComponent},
  { path: 'story',       component:StoryComponent},
  { path: 'beliefs',       component:BeliefsComponent},
  { path: 'ewgregister',       component:EwgregisterComponent},
  { path: 'wfc1register',       component:Wfc1registerComponent},
  { path: 'wfc2register',       component:Wfc2registerComponent},
  { path: 'response',       component:ResponseComponent},
  { path: 'campus',       component:CampusComponent},
  { path: 'youth',       component:YouthComponent},
  { path: 'policy',       component:PolicyComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false,
      scrollPositionRestoration: "enabled",
    })
],
  exports: [],
})
export class AppRoutingModule { }
