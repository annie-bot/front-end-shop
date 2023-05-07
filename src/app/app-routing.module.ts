import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {HomeComponent} from "./pages/home/home.component";
import {ListEnterpriseComponent} from "./pages/list-enterprise/list-enterprise.component";
import {SupplierComponent} from "./pages/supplier/supplier.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {path: 'enterprises', component: ListEnterpriseComponent},
  {path: '', component: HomeComponent},
  {path: 'supplier', component: SupplierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
