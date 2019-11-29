import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {
  private backendUrl = `http://localhost:8080/hello-world-bean`;

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService = () => {
    return this.http.get<HelloWorldBean>(this.backendUrl);
    // alert(`executed hello world bean service`);
  }
  executeHelloWorldBeanServicePathVariable = (name: string) => {
    return this.http.get<HelloWorldBean>(`${this.backendUrl}/pathvariable/${name}`);
  }


}
