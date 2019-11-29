import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

export const dependencies = {
    declarations: [
        AppComponent,
        WelcomeComponent,
        LoginComponent
    ],
    imports: [
        RouterTestingModule
    ],
    providers: [],
    bootstrap: [],
    exports: [],
    entryComponents: []
};