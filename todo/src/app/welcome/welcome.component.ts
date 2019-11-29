import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private message = 'some welcome message';
  private customizedMessage: string;
  private name: string;

  /* this will make it so the welcome/:name accepts a parameter */
  /* see login component to see logic */
  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    /* this.name = this.route.snapshot.params['name']; */
    this.name = this.route.snapshot.params.name;
  }


  getWelcomeMessage = (): void => {
     console.log(this.welcomeService.executeHelloWorldBeanService());
     this.welcomeService.executeHelloWorldBeanService().subscribe(
       response => this.handleSucessfulResponse(response),
       error => this.handleErrors(error)
     );
     console.log(`last line of welcome message`);
    /* this.welcomeService.executeHelloWorldBeanServicePathVariable(`jason`).subscribe(
      response => this.handleSucessfulResponse(response),
      error => this.handleErrors(error)
      ); */
  }

  getWelcomeMessageWithParams = (): void => {
   this.welcomeService.executeHelloWorldBeanServicePathVariable(this.name).subscribe(
     response => this.handleSucessfulResponse(response),
     error => this.handleErrors(error)
     );
 }

  handleSucessfulResponse = response => {
    console.log(response);
    console.log(response.message);
    this.customizedMessage = response.message;
  }

  handleErrors = error => {
    console.log(error);
    this.customizedMessage = error.error.message;
  }

}
