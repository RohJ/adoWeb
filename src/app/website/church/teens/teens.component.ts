import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-teens',
  templateUrl: './teens.component.html',
  styleUrls: ['./teens.component.scss']
})
export class TeensComponent implements OnInit, AfterViewInit {

  model = {
    left: true,
    middle: false,
    right: false
};

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
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
    body.classList.remove('presentation-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
