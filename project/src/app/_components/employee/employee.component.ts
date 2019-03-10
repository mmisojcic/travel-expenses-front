import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';

import { HttpService } from 'src/app/_services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(
    private userService: UserService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = this.userService.employee;
  }

  onBusinessTrip(id: number) {
    this.router.navigateByUrl('/businesstrip/' + id);
  }

  dateFormater(date: Date) {}
}
