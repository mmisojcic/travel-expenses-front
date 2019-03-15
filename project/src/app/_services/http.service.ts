import { DestinationDTO } from './../_dto/destination.dto';
import { MsgDTO } from './../_dto/msg.dto';
import { endPoint } from './../_config/end-points.config';
import { EmployeeService } from './employee.service';
import { map, catchError, finalize } from 'rxjs/operators';
import { EmployeeDTO } from './../_dto/employee.dto';
import { DataConverter } from './../_converters/data.converter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models/employee.model';
import { UserCredentialsDTO } from '../_dto/user-credentials.dto';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RegisterUserDataDTO } from '../_dto/register-data.dto';
import { DestinationsDTO } from '../_dto/destinations.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // url = 'https://http-client-practice.firebaseio.com/data.json';
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  login(url: string, json: UserCredentialsDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        this.employeeService.setUpUser();

        console.log('login done');
      })
    );
  }

  register(url: string, json: RegisterUserDataDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        this.employeeService.setUpUser();
        console.log('register done');
      })
    );
  }

  getDestinations(url: string) {
    return this.http.get(url).pipe(
      finalize(() => {
        this.router.navigateByUrl('/destinations');
        console.log('desination get');
      })
    );
  }

  saveDestination(url: string, json: DestinationDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        console.log('desination get');
      })
    );
  }
}
