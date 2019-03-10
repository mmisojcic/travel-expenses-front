import { Employee } from './../_models/employee.model';
import { DataConverter } from '../_converters/data.converter';
import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  transferSetupData: Subject<any> = new Subject();

  userCredentials: User;
  employee: Employee = new Employee();

  constructor(private router: Router) {}

  // bacis user setup : admin menu, username display, navigate to user url
  setUpUser() {
    if (this.employee.role !== undefined) {
      const userSetupData = {
        userMenu: true,
        adminMenu: this.employee.role === 'admin' ? true : false,
        username: this.employee.username
      };

      this.transferSetupData.next(userSetupData);
      console.log(userSetupData);
      localStorage.setItem('token', JSON.stringify(userSetupData));
      this.router.navigateByUrl('/user/' + this.employee.id);
    }
  }
}
