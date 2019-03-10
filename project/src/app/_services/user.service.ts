import { SessionToken } from './../_config/session.config';
import { Employee } from './../_models/employee.model';
import { DataConverter } from '../_converters/data.converter';
import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserSetupData } from '../_config/user-setup.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  transferSetupData: Subject<any> = new Subject();
  session: SessionToken;
  userCredentials: User;
  employee: Employee = new Employee();

  constructor(private router: Router) {}

  // basic user setup : admin menu, username display, session, navigate to user url
  setUpUser() {
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
      console.log(userSetupData);
      // store session in sessionStorage
      sessionStorage.setItem(
        this.session.name,
        JSON.stringify(this.session.data)
      );
      // send userSetupData to subscribing components
      this.transferSetupData.next(userSetupData);
      // navigate user to his configured url
      this.router.navigateByUrl('/user/' + this.employee.id);
    }
  }
}
