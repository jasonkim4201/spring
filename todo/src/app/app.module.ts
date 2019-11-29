import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HardcodedAuthenticationService } from './services/hardcodedAuthentication/hardcoded-authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeDataService } from './services/data/welcome-data.service';
import { RouterGuardService } from './services/routerGuard/router-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // this needs to be imported for httpClient to work. also make sure on services you are importing from @angular/common/http
    HttpClientModule
  ],
  providers: [HardcodedAuthenticationService, WelcomeDataService, RouterGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
