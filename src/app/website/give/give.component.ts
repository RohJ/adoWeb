import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as Rellax from 'rellax';

import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sha512 } from 'js-sha512';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const PAYU_URL = "https://secure.payu.in/_payment";

const httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

@Component({
  selector: 'app-give',
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.scss']
})

export class GiveComponent {

  registerForm: FormGroup;
  submitted = false;
  salt ='OcwPVHWs';
  hashed='';


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.titleService.setTitle("Give");
      this.metaTagService.updateTag({name: 'description', content: "Tithes and offerings."});
        this.registerForm = this.formBuilder.group({
            productinfo: ['', Validators.required],
            firstname: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
            email: ['', [Validators.required, Validators.email]],
            amount: ['', Validators.required],
            hash: [''],
            key: [''],
            txnid: Math.floor(10000000000 + Math.random() * 90000000000),
            curl:[''],
            surl:[''],
            //acceptTerms: [false, Validators.requiredTrue]
        });

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

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      var udf1='';
      var udf2='';
      var udf3='';
      var udf4='';
      var udf5='';

      this.hashed = ('Z9XQW5'+'|'+this.f['txnid'].value+'|'+this.f['amount'].value+'|'+this.f['productinfo'].value+'|'+this.f['firstname'].value+'|'+this.f['email'].value+'|'+udf1+'|'+udf2+'|'+udf3+'|'+udf4+'|'+udf5+'|'+'|'+'|'+'|'+'|'+'|'+this.salt);
      //console.log(this.hashed);
      var hf = sha512(this.hashed);
      //console.log(hf);

      let form = document.createElement('form');
        form.action = 'https://secure.payu.in/_payment';
        form.method = 'POST';

      let key = document.createElement('input');
        key.name = "key";
        key.value = "Z9XQW5";
        key.type="hidden";
        form.appendChild(key);
      let hash = document.createElement('input');
        hash.name = "hash";
        hash.value = hf;
        hash.type="hidden";
        form.appendChild(hash);
      let txnid = document.createElement('input');
        txnid.name = "txnid";
        txnid.value = this.f['txnid'].value;
        txnid.type="hidden";
        form.appendChild(txnid);
      let amount = document.createElement('input');
        amount.name = "amount";
        amount.value = this.f['amount'].value;
        amount.type="hidden";
        form.appendChild(amount);
      let firstname = document.createElement('input');
        firstname.name = "firstname";
        firstname.value = this.f['firstname'].value;
        firstname.type="hidden";
        form.appendChild(firstname);
      let email = document.createElement('input');
        email.name = "email";
        email.value = this.f['email'].value;
        email.type="hidden";
        form.appendChild(email);
      let phone = document.createElement('input');
        phone.name = "phone";
        phone.value = this.f['phone'].value;
        phone.type="hidden";
        form.appendChild(phone);
      let productinfo = document.createElement('input');
        productinfo.name = "productinfo";
        productinfo.value = this.f['productinfo'].value;
        productinfo.type="hidden";
        form.appendChild(productinfo);


      let curl = document.createElement('input');
        curl.name = "curl";
        curl.value = "https://payment.adonaichurch.in/api/register/response";
        curl.type="hidden";
        form.appendChild(curl);
      let surl = document.createElement('input');
        surl.name = "surl";
        surl.value = "https://payment.adonaichurch.in/api/register/response";
        surl.type="hidden";
        form.appendChild(surl);


        document.body.appendChild(form);
        form.submit();

      // display form values on success
      //window.location.href = "https://secure.payu.in/_payment";
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    /*  this.httpClient.post<any>(PAYU_URL, this.registerForm.value, httpOptions).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );  */
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
