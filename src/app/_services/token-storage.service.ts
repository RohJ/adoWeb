import { Injectable } from '@angular/core';

const TOKEN_KEY = btoa("8b8d6208bb8e610068883522459434b94b2e1802:s7I8aesfDgmjsDGp+fvTIOjU9wFFtn/vFsyXRFlrWq7+4D5ClZHCD8PZ5FT7/pEgu4v3X2JJL1RAOOTayrZrOclhM6mnT1J8PsVg718Of6WEvHS/T9i7Nw9pWvlBsV8E");
const USER_KEY = '';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  };

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(USER_KEY, token);
  };

  public userToken()  {
    return (USER_KEY);
  };

  public getToken() {
    return (TOKEN_KEY);
  };

/*  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }   */

  public getUser(): any {
    return window.sessionStorage.getItem(USER_KEY);
  /*  const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};  */
  };


}
