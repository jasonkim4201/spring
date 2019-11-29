import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcodedAuthentication/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'jasonkim';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  handleLogin(): void {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      /* second argument makes the :name route defined */
      this.router.navigate(['welcome', this.username]);
    } else {
      window.clearTimeout();
      this.invalidLogin = true;
      setTimeout(() => {
        this.invalidLogin = false;
      }, 3000);
    }
    console.log(this.username);
  }

  

}
