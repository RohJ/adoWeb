import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-kkids',
  templateUrl: './kkids.component.html',
  styleUrls: ['./kkids.component.scss']
})
export class KkidsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit() {

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
