import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model'

const baseUrl = 'https://payment.adonaichurch.in/api/register';

const httpOptions= {headers: new HttpHeaders({
  'Content-Type':'application/json'
})};

@Injectable({
  providedIn: 'root'
})

export class Register {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
  //  console.log("Form data sent through API");
  //  console.log(data);
    return this.http.post(`${baseUrl}/new`, data, { headers: httpOptions.headers });
  }

  responsePayment(txnid: any): Observable<Payment> {
    return this.http.get<Payment>(`${baseUrl}?txnid=${txnid}`);
  }
}
