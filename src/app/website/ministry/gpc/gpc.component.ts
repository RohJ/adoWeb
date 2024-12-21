import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../_services/user.service';
import * as Rellax from 'rellax';
// import Glide from "@glidejs/glide";

@Component({
  selector: 'app-gpc',
  templateUrl: './gpc.component.html',
  styleUrls: ['./gpc.component.scss']
})
export class GpcComponent implements OnInit, OnDestroy, AfterViewInit {

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

      // new Glide(".gpc-cards", {
      //   type: "carousel",
      //   startAt: 0,
      //   focusAt: 0,
      //   perTouch: 1,
      //   perview: 5,
      //   // autoplay: 3000,
      //   breakpoints: {
      //     2560: {
      //       perView: 4
      //     },
      //     1440: {
      //       perView: 4
      //     },
      //     1024: {
      //       perView: 3
      //     },
      //     768: {
      //       perView: 2
      //     },
      //     600: {
      //       perView: 1
      //     }
      //   },
      // }).mount();

      this.userAccess.getEvents()
      .subscribe({
        next: (data) => {
        this.createData = data;

        // console.log(this.createData);

        for (let j = 0; j < this.createData.items.length; j++) {
          if(this.createData.items[j].summary !== 'Global Pastors Conference') {
                delete this.createData.items[j];
              } else if(this.createData.items[j].status == 'cancelled') {
                  delete this.createData.items[j];
              } else if(this.createData.items[j].start.date) {
                  this.startDate = Date.parse(this.createData.items[j].start.date);
                  if (this.startDate < this.todayDate) {
                  delete this.createData.items[j];

                  } else {
                       this.myArray.push({ summary: this.createData.items[j].summary, sdate: this.createData.items[j].start.dateTime });
                      //  console.log(this.createData.items[j].summary + '  ' + this.createData.items[j].start.dateTime);
                      }
          }
        }

        let keyArr: any[] = Object.keys(this.createData.items)
        keyArr.forEach((key: any) => {

          if(this.createData.items[key].start.dateTime){
            this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.dateTime });

          } else if(this.createData.items[key].start.date){
            this.myArray.push({ summary: this.createData.items[key].summary, sdate: this.createData.items[key].start.date });

          }
        });
        // ASC
        this.sortedArray = this.myArray.sort((a: any, b: any) => {
          return <any>new Date(a.sdate) - <any>new Date(b.sdate);
        });

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
