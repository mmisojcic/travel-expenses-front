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

  color = 'red';

  constructor(
    private userService: UserService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = this.userService.employee;
    this.businesTrip = this.employee.businessTrips[0];
  }

  onBusinessTrip(businessTrip: BusinessTrip) {
    this.businesTrip = businessTrip;
    console.log(this.businesTrip);
    this.businessTripTrigger = 'open';
    this.color = this.statusColor(businessTrip.status);
  }
  onCloseBusinessTrip() {
    this.businessTripTrigger = 'closed';
  }

  statusColor(status: string) {
    let color;
    if (status === 'Ongoing') {
      color = '#17a2b8';
    } else if (status === 'Upcoming') {
      color = '#007bff';
    } else if (status === 'Finished') {
      color = '#28a745';
    } else if (status === 'Canceled') {
      color = '#dc3545';
    }
    return color;
  }
  dateFormater(date: Date) {}
}
