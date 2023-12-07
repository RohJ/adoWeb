import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

const API_URL = 'https://api.vimeo.com/users/140653357';
const API_PAGING_URL = 'https://api.vimeo.com';

const gcal_id ='adonaichurch86@gmail.com';
const gapi_key = 'AIzaSyBNtL1b0W85fwfm1GEDFIY-pzcQOmG2hp0';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private tokenAccess: TokenStorageService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/projects/4496867/videos?per_page=9&access_token=' + this.tokenAccess.userToken());
  };

/*  getPage(i : any): Observable<any> {
    return this.http.get(API_PAGING_URL + i + this.tokenAccess.userToken());
  } */

  getPage1(i : any, url : any): Observable<any> {
    return this.http.get(API_PAGING_URL + url + i);
  };

  getSpeaker(i : string): Observable<any> {
    return this.http.get(API_PAGING_URL + '/tags/'+ i + '/videos?per_page=9&access_token=' + this.tokenAccess.userToken());
  };

  getTitle(i : string): Observable<any> {
    return this.http.get(API_URL + '/videos?query=' + i + '&per_page=9&access_token=' + this.tokenAccess.userToken());
  };

  getTran(): Observable<any> {
    return this.http.get('https://secure.payu.in');
  };

  getEvents(): Observable<any> {
    return this.http.get('https://www.googleapis.com/calendar/v3/calendars/' + gcal_id + '/events?key=' + gapi_key);
  };

  /* getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  } */

}
