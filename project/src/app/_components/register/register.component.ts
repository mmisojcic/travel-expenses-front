import { Data } from './../../_tests/data.provider';
import { EmployeeService } from '../../_services/employee.service';
import { HttpService } from 'src/app/_services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataConverter } from 'src/app/_converters/data.converter';
import { RegisterUserData } from 'src/app/_models/register-data.model';
import { endPoint } from 'src/app/_config/end-points.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private http: HttpService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][a-z][0-9]{2,30}$')
      ]),
      password: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ]),
      firstName: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ]),
      lastName: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ])
    });
  }

  register() {
    this.employeeService.registerUserData = new RegisterUserData(
      this.registerForm.get('username').value,
      this.registerForm.get('password').value,
      this.registerForm.get('firstName').value,
      this.registerForm.get('lastName').value
    );
    console.log(this.employeeService.registerUserData);
    this.http
      .register(
        endPoint.baseUrl + endPoint.register,
        DataConverter.registerUserDataToJson(
          this.employeeService.registerUserData
        )
      )
      .subscribe(
        res => {
          this.employeeService.employee = DataConverter.jsonToEmployee(res);
        },
        err => {
          console.log('http error on register');
          this.employeeService.employee = DataConverter.jsonToEmployee(
            Data.employee
          );
        }
      );
  }
}
