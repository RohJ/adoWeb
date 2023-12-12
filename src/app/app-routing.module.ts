import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { CellsComponent } from './website/church/cells/cells.component';
import { EwgComponent } from './website/ministry/ewg/ewg.component';
import { Wfc1Component } from './website/ministry/wfc1/wfc1.component';
import { Wfc2Component } from './website/ministry/wfc2/wfc2.component';

const routes: Routes = [
  { path: '',         component: WebsiteComponent },
  { path: 'cells',         component: CellsComponent },
  { path: 'ewg',         component: EwgComponent },
  { path: 'wfc1',         component: Wfc1Component },
  { path: 'wfc2',         component: Wfc2Component }
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
