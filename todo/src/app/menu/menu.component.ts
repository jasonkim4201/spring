import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcodedAuthentication/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 // isLoggedIn = false;

  constructor(private hardcodedAuthentication: HardcodedAuthenticationService) {

  }

  ngOnInit() {
   // this.isLoggedIn = this.hardcodedAuthentication.isLoggedIn();
  }

  inSession = (): boolean => this.hardcodedAuthentication.isLoggedIn();
  logout = (): void => this.hardcodedAuthentication.logout();
}
