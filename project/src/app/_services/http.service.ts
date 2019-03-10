import { endPoint } from './../_config/end-points.config';
import { UserService } from './user.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { EmployeeDTO } from './../_dto/employee.dto';
import { DataConverter } from './../_converters/data.converter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models/employee.model';
import { UserCredentialsDTO } from '../_dto/user-credentials.dto';
import * as employee from '../_tests/employee.json';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  json = employee.default;
  // url = 'https://http-client-practice.firebaseio.com/data.json';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  login(url: string, json: UserCredentialsDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        this.userService.setUpUser();
        console.log('sve gotovo');
      })
    );
  }
}
