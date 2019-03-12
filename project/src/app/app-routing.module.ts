import { EmployeeComponent } from './_components/employee/employee.component';
import { LoginComponent } from './_components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './_components/register/register.component';
import { AllEmployeesComponent } from './_components/all-employees/all-employees.component';
import { DestinationsComponent } from './_components/destinations/destinations.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/:id', component: EmployeeComponent },
  { path: 'allemployees', component: AllEmployeesComponent},
  { path: 'destinations', component: DestinationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
