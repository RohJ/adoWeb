import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../_services/user.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-ewg',
  templateUrl: './ewg.component.html',
  styleUrls: ['./ewg.component.scss']
})
export class EwgComponent implements OnInit, OnDestroy, AfterViewInit {

  // styles: any[] = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];

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
    config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
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
      // console.log(this.sortedArray);

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
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngAfterViewInit(){
    setTimeout(function(){
      if (window.innerWidth >= 991) {
          var rellaxHeader = new Rellax('.rellax-header');
          var rellaxText = new Rellax('.rellax-text');
      }
    },200);

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
