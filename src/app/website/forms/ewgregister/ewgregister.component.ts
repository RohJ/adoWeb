import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as Rellax from 'rellax';

import { Title, Meta } from '@angular/platform-browser';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Register } from 'app/_services/register.service';
import { Registration } from 'app/models/registration.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-ewgregister',
  templateUrl: './ewgregister.component.html',
  styleUrls: ['./ewgregister.component.scss']
})
export class EwgregisterComponent implements OnInit, OnDestroy, AfterViewInit {

  hashed='';
  salt ='OcwPVHWs';
  registration: Registration = {
      firstname:'',
      lastname: '',
      email: '',
      phone: '',
      age: null,
      city: '',
      gender: '',
      arrivals: '',
      productinfo: '',
      residential: '',
      type: '',
      amount: '0',
      txnid: 'EWG' + Math.floor(10000000000 + Math.random() * 90000000000),
      paym: '',
      status: 'Not Paid',
      agree: false,
  };

    submitted:Boolean = false;

    amnt:number = 0;

    // Dehradun Registration Amounts
    // dehRes:number = 6000;
    // dehNonres:number = 4000;
    // dehResChild:number = 4200;
    // dehNonresChild:number = 2800;

    // Bangalore Registration Amounts
    res = 2100;
    nonres = 700;
    resChild = 1470;
    nonresChild = 470;

    // Pre-registration
    preAmt = 300;

    count:number = 0;
    remDisables:boolean = false;
    isDisabled:boolean = false;
    wfcForm: FormGroup;
    public data: Array<object> = [];

    closeResult = '';

    constructor(private formBuilder: FormBuilder, private registerService: Register,private titleService: Title, private metaTagService: Meta, private modalService: NgbModal) { }

  ngOnInit() {

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');

    this.titleService.setTitle("Encounter With God");
    this.metaTagService.updateTag({name: 'description', content: "Encounter with God Registration Form"});
    this.wfcForm = this.formBuilder.group (
        {
          arrival: new FormControl(null, [Validators.required]),
          productinfo: new FormControl(null, [Validators.required]),
          residential: new FormControl(null, [Validators.required]),
          type: new FormControl(null, [Validators.required]),
          paym: new FormControl(null, [Validators.required]),
          agree: [false, [Validators.requiredTrue]],
          registrationForm:this.formBuilder.array([this.createPerson()],Validators.required)
        }
      )
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

  public saveRegistration(): void {

    console.log(this.wfcForm.value);
    console.log("Value of submitted is "+this.submitted);
    var amt = 0;

    for ( let i = 0; i < this.registrationForm.controls.length; i++) {
    //  console.log(this.registrationForm.controls.length);
    //  console.log(i);

    this.registration = {

      firstname: this.registrationForm.at(i).get('firstname').value,
      lastname: this.registrationForm.at(i).get('lastname').value,
      email: this.registrationForm.at(i).get('email').value,
      phone: this.registrationForm.at(i).get('phone').value,
      age: this.registrationForm.at(i).get('age').value,
      city: this.registrationForm.at(i).get('city').value,
      gender: this.registrationForm.at(i).get('gender').value,
      arrivals: this.wfcForm.controls['arrival'].value,
      productinfo: this.wfcForm.controls['productinfo'].value,
      residential: this.wfcForm.controls['residential'].value,
      type: this.wfcForm.controls['type'].value,
      amount: this.registration.amount,
      txnid: this.registration.txnid,
      paym: this.registration.paym,
      status: this.registration.status,
      agree: this.wfcForm.controls['agree'].value,
    };
    this.data.push(this.registration);

    console.log(this.registration.age);
  //  console.log(this.data);
  var age:number = Number (this.registration.age);
  console.log(age);

  if (this.wfcForm.controls['paym'].value == 'Full Payment') {
  if (this.wfcForm.controls['residential'].value == 'Residential') {
      console.log("Loop 1");
    if (age < 6) {
      console.log("Loop 2");
      amt = amt + 0;
    } else if (age < 12) {
      console.log("Loop 3");
      amt = amt + this.resChild;
    } else if (age > 12) {
      console.log("Loop 4");
      amt = amt + this.res;
    }
  } else if (this.wfcForm.controls['residential'].value == 'Non Residential') {

    if (age < 6) {
      console.log("Loop 5");
      amt = amt + 0;
    } else if (age < 12) {
      console.log("Loop 6");
      amt = amt + this.nonresChild;
    } else if (age > 12) {
      console.log("Loop 7");
      amt = amt + this.nonres;
    }
  }
} else if (this.wfcForm.controls['paym'].value == 'Part Payment'){
  if (age > 5) {
    amt = amt + this.preAmt;
  } else {
    amt = amt + 0;
  }
}
  console.log(amt);
  }

  console.log("For loop completed.");

  this.amnt = amt;
  console.log(this.amnt);

    this.registerService.create(this.data)
      .subscribe({
        next: (res) => {
   //       console.log("Form Submitted is True in the request.");
        },
        error: (e) => {
          console.error(e)
    //      console.log("Form Submitted is False in the request.");
          this.submitted = false;
      },
      complete: () => {
    //    console.log('Data Saved');
        this.submitted = true;
        this.payuForm();
      }
    });
  }

  private payuForm() :void {

      var udf1='';
      var udf2='';
      var udf3='';
      var udf4='';
      var udf5='';

      this.hashed = ('Z9XQW5'+'|'+this.registration.txnid+'|'+this.amnt+'|'+this.wfcForm.controls['productinfo'].value+'|'+this.registrationForm.at(0).get('firstname').value+'|'+this.registrationForm.at(0).get('email').value+'|'+udf1+'|'+udf2+'|'+udf3+'|'+udf4+'|'+udf5+'|'+'|'+'|'+'|'+'|'+'|'+this.salt);
    //  console.log(this.hashed);
      var hf = sha512(this.hashed);
      console.log(this.registration.amount);

      let paymentForm = document.createElement('form');
      paymentForm.action = 'https://secure.payu.in/_payment';
      paymentForm.method = 'POST';

      let key = document.createElement('input');
        key.name = "key";
        key.value = "Z9XQW5";
        key.type="hidden";
        paymentForm.appendChild(key);
      let hash = document.createElement('input');
        hash.name = "hash";
        hash.value = hf;
        hash.type="hidden";
        paymentForm.appendChild(hash);
      let txnid = document.createElement('input');
        txnid.name = "txnid";
        txnid.value = this.registration.txnid;
        txnid.type="hidden";
        paymentForm.appendChild(txnid);
      let amount = document.createElement('input');
        amount.name = "amount";
        amount.value = this.amnt.toString();
        amount.type="hidden";
        paymentForm.appendChild(amount);
      let firstname = document.createElement('input');
        firstname.name = "firstname";
        firstname.value = this.registrationForm.at(0).get('firstname').value;
        firstname.type="hidden";
        paymentForm.appendChild(firstname);
      let email = document.createElement('input');
        email.name = "email";
        email.value = this.registrationForm.at(0).get('email').value;
        email.type="hidden";
        paymentForm.appendChild(email);
      let phone = document.createElement('input');
        phone.name = "phone";
        phone.value = this.registrationForm.at(0).get('phone').value;
        phone.type="hidden";
        paymentForm.appendChild(phone);
      let productinfo = document.createElement('input');
        productinfo.name = "productinfo";
        productinfo.value = this.wfcForm.controls['productinfo'].value;
        productinfo.type="hidden";
        paymentForm.appendChild(productinfo);


      let curl = document.createElement('input');
        curl.name = "curl";
        curl.value = "https://payment.adonaichurch.in/api/register/response";
        curl.type="hidden";
        paymentForm.appendChild(curl);
      let surl = document.createElement('input');
        surl.name = "surl";
        surl.value = "https://payment.adonaichurch.in/api/register/response";
        surl.type="hidden";
        paymentForm.appendChild(surl);

        document.body.appendChild(paymentForm);
        paymentForm.submit();

    }



/*  register() {

    if(this.wfcForm.status == 'VALID'){
      console.log(this.wfcForm.value);
    }
  } */

  private createPerson():FormGroup{

    return this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      phone:[null, [Validators.required, Validators.pattern("^[6789]{1}[0-9]{9}$")]],
      gender: [null, [Validators.required]],
      age:[null, Validators.required],
      city:[null, [Validators.required, Validators.pattern("^[A-Za-z -]+$")]],
    });
  }

  get registrationForm():FormArray{
    return <FormArray> this.wfcForm.get('registrationForm');
  }

  // convenience getter for easy access to form fields
  get f() { return this.wfcForm.controls; }

  public addPerson() {
    this.registrationForm.push(this.createPerson());
    this.count++;
    if (this.count > 4) {
      this.isDisabled = true;
    }
  }

  public removePerson(index){
    this.registrationForm.removeAt(index);
    this.count--;
    if (this.count < 5) {
      this.isDisabled = false;
    }
  }

  public disableAdd() {
    if(this.wfcForm.controls['type'].value == 'Individual') {

      if (this.count > 0) {
        for ( let j = 0; j < this.count; ) {
        this.removePerson(this.count);
        }
      }
      this.isDisabled = true;
    } else if(this.wfcForm.controls['type'].value == 'Married Couple') {
      if (this.count > 0) {
        for ( let j = 0; j < this.count;) {
        this.removePerson(this.count);
        }
      }
      this.addPerson();
      this.isDisabled = true;
    } else if(this.wfcForm.controls['type'].value == 'Family' || this.wfcForm.controls['type'].value == 'Group') {
      if (this.count > 0) {
        for ( let j = 0; j < this.count;) {
        this.removePerson(this.count);

        }
      }
      this.addPerson();
      this.isDisabled = false;
    }
  }

  open(consent: any) {
    this.modalService.open(consent, {ariaLabelledBy: 'modal-consent'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  };

}
