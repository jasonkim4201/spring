import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`${this.backendUrl}/pathvariable/${name}`, {headers});
  }

  createBasicAuthenticationHeader() {
    let username = 'user';
    let password = 'password';
    let basicAuthHeaderString = `Basic ${window.btoa(username + ':' + password)}`;
    return basicAuthHeaderString;
  }

  /* Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean/pathvariable/jasonkim' 
  from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
  header is present on the requested resource. */

}
