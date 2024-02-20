import { Component, OnInit, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import * as Rellax from 'rellax';

import { Register } from 'app/_services/register.service';
import { Payment } from 'app/models/payment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit, OnDestroy, AfterViewInit {

  response: Payment = {
    mihpayid: '',
    mode: '',
    status: '',
    unmappedstatus: '',
    key: '',
    txnid: '',
    amount: '',
    discount: '',
    net_amount_debit: '',
    addedon: '',
    productinfo: '',
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    email: '',
    phone: '',
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: '',
    udf6: '',
    udf7: '',
    udf8: '',
    udf9: '',
    udf10: '',
    hash: '',
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    payment_source: '',
    PG_TYPE: '',
    bank_ref_num: '',
    bankcode: '',
    error: '',
    error_Message: '',
  };

  txnid: string;

  constructor(private register: Register, private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.route.queryParams
      .subscribe(params => {
        this.txnid = params['txnid'];
      }
    );
    this.paymentDetails();
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

  private paymentDetails() {

    this.register.responsePayment(this.txnid)
    .subscribe({
      next: (data) => {
        this.response = data;
        this.response[0].amount = Math.floor(this.response[0].amount);
      },
      error: (e) => console.error(e)
    });

  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'assets/files/WFC_I_General_Information_Letter_Jun24.pdf.pdf');
    link.setAttribute('download', `WFC_I_General_Information_Letter_Jun24.pdf.pdf`);
    link.click();
    link.remove();
  }

  downloadFile1() {
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_self');
  link.setAttribute('href', 'assets/files/WFC_II_General_Information_Letter_Mar24.pdf');
  link.setAttribute('download', `WFC_II_General_Information_Letter_Mar24.pdf`);
  link.click();
  link.remove();
  }

  downloadFile2() {
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_self');
  link.setAttribute('href', 'assets/files/EWG_General_Information_Letter_2024.pdf');
  link.setAttribute('download', `EWG_General_Information_Letter_2024.pdf`);
  link.click();
  link.remove();
  }

  downloadFile3() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'assets/files/WFC_II_General_Information_Letter_Nov24.pdf');
    link.setAttribute('download', `WFC_II_General_Information_Letter_Nov24.pdf`);
    link.click();
    link.remove();
    }

}
