import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {ListUsersComponent} from "./pages/list-users/list-users.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path: 'users', component: ListUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
