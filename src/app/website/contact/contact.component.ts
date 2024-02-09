import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { Loader } from "@googlemaps/js-api-loader";
import * as Rellax from 'rellax';

// let map: google.maps.Map;

// const loader = new Loader({
//   apiKey: "AIzaSyB9_DkqPWPVCGQRKiZY_QrJMc-c9cVLxhs",
//   version: "weekly",
// });
 const myLatLng = { lat: 13.01533, lng: 77.66521 };

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  mapOptions: google.maps.MapOptions = {
    center: myLatLng,
    zoom: 16,
    streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
  }
  marker = {
    position: { lat: 13.01533, lng: 77.66521 },
    title: "Adonai Church"
  }

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');

    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center: myLatLng,
    //     zoom: 18,
    //     streetViewControl: false,
    //     fullscreenControl: false,
    //     mapTypeControlOptions: {
    //       mapTypeIds: []
    //     },
    //   });
    //   new google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Adonai Church"
    //   });
    // });

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
  }

}
