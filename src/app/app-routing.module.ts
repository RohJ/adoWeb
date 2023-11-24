import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  { path: '',         component: WebsiteComponent }
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
