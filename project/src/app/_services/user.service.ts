import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionToken } from '../_config/session.config';
import { User } from '../_models/user.model';
import { RegisterUserData } from '../_models/register-data.model';
import { UserSetupData } from '../_config/user-setup.config';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  transferSetupData: Subject<any> = new Subject();
  session: SessionToken;
  userCredentials: User;
  registerUserData: RegisterUserData;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  // basic user setup : admin menu, username display, session, navigate to user url
  setUpUser() {
    // later compare employee.username with userCreditentials.username
    if (this.employeeService.employee.username !== undefined) {
      const userSetupData = new UserSetupData(
        true,
        this.employeeService.employee.role === 'admin' ? true : false,
        this.userCredentials.username
      );
      // setup new session
      this.session = {
        name: 'session',
        data: {
          uid: this.employeeService.employee.id,
          start: new Date().toLocaleString()
        }
      };
      // send userSetupData to subscribing components
      this.transferSetupData.next(userSetupData);
      // store session in sessionStorage
      sessionStorage.setItem(
        this.session.name,
        JSON.stringify(this.session.data)
      );
      // navigate user to his configured url
      this.router.navigateByUrl('/user/' + this.employeeService.employee.id);
    }
  }
}
