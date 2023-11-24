import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { WebsiteComponent } from './website.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule
    ],
    declarations: [ WebsiteComponent ],
    exports:[ WebsiteComponent ],
    providers: []
})
export class WebsiteModule { }
