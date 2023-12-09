import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../_services/user.service';

import * as Rellax from 'rellax';


@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})



export class WebsiteComponent implements OnInit, OnDestroy, AfterViewInit {
  model = {
      left: true,
      middle: false,
      right: false
  };
  todayDate : number = Date.now();
  startDate : number = null;

  createData:any = [];
  myArray:any = [];
  sortedArray:any =[];

  summary ='';
  sdate='';

   constructor(private userAccess: UserService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
		config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
    config.animation = true;
   }


  ngOnInit() {

    this.userAccess.getEvents()
    .subscribe({
      next: (data) => {
      this.createData = data;

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      for (let j = 0; j < this.createData.items.length; j++) {
        // console.log('Date - ' + this.createData.items[j].start.date);
        // console.log('DateTime - ' + this.createData.items[j].start.dateTime);

        if(this.createData.items[j].status == 'cancelled') {
            delete this.createData.items[j];
        }else if(this.createData.items[j].start.date) {
          this.startDate = Date.parse(this.createData.items[j].start.date);
          // console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
          if (this.startDate < this.todayDate) {
            // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
            delete this.createData.items[j];
            // this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.date });
            // console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.date);
          }
        } else if(this.createData.items[j].start.dateTime) {
            this.startDate = Date.parse(this.createData.items[j].start.dateTime);
            // console.log(j + ' start date - ' + this.startDate + '  ' + this.createData.items[j].summary);
            if (this.startDate < this.todayDate) {
            // console.log('Filtered Data ' + this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            delete this.createData.items[j];
            // this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime });
            // console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
            }
        }
      }

      // console.log(this.createData);
      // console.log('Length - ' + this.createData.items.length);

      let keyArr: any[] = Object.keys(this.createData.items)
      keyArr.forEach((key: any) => {
        // console.log(this.createData.items[key].summary)
        // push object with abbreviation, price and coin to array
        if(this.createData.items[key].start.dateTime){
          this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.dateTime });
          // console.log(this.myArray);
        } else if(this.createData.items[key].start.date){
          this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.date });
          // console.log(this.myArray);
        }
      });
      // ASC
      this.sortedArray = this.myArray.sort((a: any, b: any) => {
        return <any>new Date(a.sdate) - <any>new Date(b.sdate);
      });
      console.log(this.sortedArray);

      /* for (let i = 0; i < 3; i++) {
        console.log(this.createData);
        console.log(this.createData.items[i].summary + '  ' + this.createData.items[i].start.date);
      } */
    },
      error: (err) => {
      // this.createData = JSON.parse(err.error).message;
      // console.log(JSON.parse(err.error).message);
      }
    });

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('presentation-page');
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.add('navbar-transparent');
  }
  ngAfterViewInit(){
    setTimeout(function(){
      if (window.innerWidth >= 991) {
          var rellax = new Rellax('.rellax', {
              center: true
          });
          var rellax1 = new Rellax('.rellax1', {
              center: true
          });
          var rellax5 = new Rellax('.rellax5', {
              center: true
          });
          var rellax6 = new Rellax('.rellax6', {
              center: true
          });
          var rellax7 = new Rellax('.rellax7', {
              center: true
          });
          var rellax8 = new Rellax('.rellax8', {
              center: true
          });
          var rellax9 = new Rellax('.rellax9', {
              center: true
          });
          var rellax10 = new Rellax('.rellax10', {
              center: true
          });
          var rellax11 = new Rellax('.rellax11', {
              center: true
          });
          var rellax12 = new Rellax('.rellax12', {
              center: true
          });
          var rellax13 = new Rellax('.rellax13', {
              center: true
          });
          var rellax14 = new Rellax('.rellax14', {
              center: true
          });

          var rellaxHeader = new Rellax('.rellax-header');
          var rellaxText = new Rellax('.rellax-text');
      }
    },200);

  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('presentation-page');
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.remove('navbar-transparent');
  }


}
