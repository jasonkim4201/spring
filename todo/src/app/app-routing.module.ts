import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGuardService } from './services/routerGuard/router-guard.service';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouterGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouterGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouterGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
