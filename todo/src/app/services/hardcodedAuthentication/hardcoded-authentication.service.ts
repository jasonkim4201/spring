import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  test = 'test';

  constructor() { }

  authenticate = (username: string, password: string): boolean => {
    console.log(`before`);
    console.log(this.isLoggedIn());
    if (username === 'jasonkim' && password === 'password') {
       sessionStorage.setItem('authenticatedUser', username);
       console.log(`after`);
       console.log(this.isLoggedIn());
       return true;
     }
    return false;
    }

  isLoggedIn = (): boolean => {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout = (): void => {
    sessionStorage.removeItem('authenticatedUser');
  }

}
