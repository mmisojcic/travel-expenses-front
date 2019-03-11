import { SessionToken } from './../_config/session.config';
import { Employee } from './../_models/employee.model';
import { DataConverter } from '../_converters/data.converter';
import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserSetupData } from '../_config/user-setup.config';
import { RegisterUserData } from '../_models/register-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  transferSetupData: Subject<any> = new Subject();
  session: SessionToken;
  userCredentials: User;
  registerUserData: RegisterUserData;

  employee: Employee = new Employee();

  constructor(private router: Router) {}

  // basic user setup : admin menu, username display, session, navigate to user url
  setUpUser() {
    // later compare employee.username with userCreditentials.username
    if (this.employee.username !== undefined) {
      const userSetupData = new UserSetupData(
        true,
        this.employee.role === 'admin' ? true : false,
        this.employee.username
      );
      // setup new session
      this.session = {
        name: 'session',
        data: { uid: this.employee.id, start: new Date().toLocaleString() }
      };
      // send userSetupData to subscribing components
      this.transferSetupData.next(userSetupData);
      // store session in sessionStorage
      sessionStorage.setItem(
        this.session.name,
        JSON.stringify(this.session.data)
      );
      // navigate user to his configured url
      this.router.navigateByUrl('/user/' + this.employee.id);
    }
  }
}
