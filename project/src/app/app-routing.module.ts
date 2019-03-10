import { EmployeeComponent } from './_components/employee/employee.component';
import { LoginComponent } from './_components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { BusinessTripComponent } from './_components/business-trip/business-trip.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/:id', component: EmployeeComponent },
  { path: 'businesstrip/:id', component: BusinessTripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
