import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';
import { CellsComponent } from './church/cells/cells.component';
import { EwgComponent } from './ministry/ewg/ewg.component';
import { Wfc1Component } from './ministry/wfc1/wfc1.component';
import { Wfc2Component } from './ministry/wfc2/wfc2.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule
    ],
    declarations: [ WebsiteComponent, CellsComponent, EwgComponent, Wfc1Component, Wfc2Component ],
    exports:[ WebsiteComponent ],
    providers: []
})
export class WebsiteModule { }
