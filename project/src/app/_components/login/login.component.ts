import { MsgDTO } from './../../_dto/msg.dto';
import { DataConverter } from './../../_converters/data.converter';
import { HttpService } from 'src/app/_services/http.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user.model';
import { endPoint } from 'src/app/_config/end-points.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][a-z][0-9]{2,30}$')
      ]),
      password: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ])
    });
  }

  login() {
    this.userService.userCredentials = new User(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    );
    // this.http
    //   .test(
    //     endPoint.baseUrl + endPoint.login,
    //     DataConverter.userCredentialsToJson(this.userService.userCredentials)
    //   )
    //   .subscribe(res => {
    //     const msg = DataConverter.jsontotest(res);
    //     alert(msg.msg);
    //   });

    this.http
      .login(
        endPoint.baseUrl + endPoint.login,
        DataConverter.userCredentialsToJson(this.userService.userCredentials)
      )
      .subscribe(
        res => {
          this.userService.employee = DataConverter.jsonToEmployee(res);
        },
        err => {
          console.log('http error on login' + err);
          this.userService.employee = DataConverter.jsonToEmployee(
            this.http.json
          );
          console.log(this.userService.employee);
        }
      );
  }
}
export class Msg {
  constructor(public msg: string) {}
}
