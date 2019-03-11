import { BillItem } from './../../_models/bill-item.model';
import { BusinessTrip } from './../../_models/business-trip.model';
import {
  businessTripAnimation,
  employeeAnimation
} from './../../_animations/business-trip.animation';
import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';

import { HttpService } from 'src/app/_services/http.service';
import { Router } from '@angular/router';
import { Bill } from 'src/app/_models/bill.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [businessTripAnimation, employeeAnimation]
})
export class EmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  businesTrip: BusinessTrip = new BusinessTrip();

  businessTripTrigger = 'closed';

  constructor(
    private userService: UserService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = this.userService.employee;
    this.businesTrip = this.employee.businessTrips[0];
  }

  onBusinessTrip(ind: number) {
    this.businesTrip = this.employee.businessTrips[ind - 1];
    console.log(this.businesTrip);
    this.businessTripTrigger = 'open';
  }
  onCloseBusinessTrip() {
    this.businessTripTrigger = 'closed';
  }

  dateFormater(date: Date) {}
}
