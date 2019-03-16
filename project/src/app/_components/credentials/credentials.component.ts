import { UserService } from 'src/app/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { User } from 'src/app/_models/user.model';
import { Employee } from 'src/app/_models/employee.model';
import {
  formAnimation,
  infoDimAnimation
} from '../../_animations/credentials.animation';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss'],
  animations: [formAnimation, infoDimAnimation]
})
export class CredentialsComponent implements OnInit {
  credentials: User;
  employee: Employee;
  changeButtonCaption = 'Change';
  credentialsFormShow = false;
  animationTrigger = 'closed';
  username = false;
  email = false;
  newPassword = false;

  constructor(
    private userService: UserService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.credentials = this.userService.userCredentials;
    this.employee = this.employeeService.employee;
  }

  toggleForm(option: string) {
    this.formSetup(option);
    this.credentialsFormShow === false
      ? (this.credentialsFormShow = true)
      : (this.credentialsFormShow = false);

    this.animationTrigger === 'closed'
      ? (this.animationTrigger = 'open')
      : (this.animationTrigger = 'closed');
  }

  onCancel() {
    this.credentialsFormShow = false;
    this.animationTrigger = 'closed';
    this.username = false;
    this.newPassword = false;
    this.email = false;
  }

  formSetup(option: string) {
    if (option === 'user') {
      this.username = true;
    } else if (option === 'pass') {
      this.newPassword = true;
    } else if (option === 'email') {
      this.email = true;
    }
  }
}
