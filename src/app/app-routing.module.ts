import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

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
