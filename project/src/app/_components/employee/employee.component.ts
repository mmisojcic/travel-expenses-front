import { FormGroup, FormControl } from '@angular/forms';
import { TripStatus } from './../../_models/tripStatus.model';
import { BillItem } from './../../_models/bill-item.model';
import { BusinessTrip } from './../../_models/business-trip.model';
import {
  businessTripAnimation,
  employeeAnimation
} from './../../_animations/business-trip.animation';
import { EmployeeService } from '../../_services/employee.service';
import { Component, OnInit, Injectable } from '@angular/core';
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
  statusForm: FormGroup;

  employee: Employee = new Employee();
  businesTrip: BusinessTrip = new BusinessTrip();

  // mock status array. later to be filled with real data
  tripStatuses = [
    new TripStatus(1, 'ongoing'),
    new TripStatus(2, 'upcoming'),
    new TripStatus(3, 'finished'),
    new TripStatus(4, 'canceled')
  ];
  // single status
  status = 'canceled';

  // animation trigger
  businessTripTrigger = 'closed';

  color = 'red';

  constructor(
    private employeeService: EmployeeService,
    private http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = this.employeeService.employee;
    this.businesTrip = this.employee.businessTrips[0];
    // statusForm init
    this.statusForm = new FormGroup({
      status: new FormControl()
    });
  }

  changeStatus() {
    const i = this.statusForm.get('status').value - 1;
    const status = new TripStatus(i, this.tripStatuses[i].name);

    console.log(status);
  }

  onBusinessTrip(businessTrip: BusinessTrip) {
    this.businesTrip = businessTrip;
    this.businessTripTrigger = 'open';
    this.color = this.statusColor(businessTrip.status);
  }
  onCloseBusinessTrip() {
    this.businessTripTrigger = 'closed';
  }

  statusColor(status?: string, select?: HTMLOptionElement) {
    // in case of option select
    if (select) {
      select.style.color = this.colorPick(status);
    } else {
      // any other case
      return this.colorPick(status);
    }
  }

  colorPick(status) {
    let color;
    if (status === 'ongoing') {
      color = '#17a2b8';
    } else if (status === 'upcoming') {
      color = '#ffc107';
    } else if (status === 'finished') {
      color = '#28a745';
    } else if (status === 'canceled') {
      color = '#dc3545';
    }
    return color;
  }

  selectStatus(status: string) {
    this.status = status;
    console.log(this.status);
  }

  dateFormater(date: Date) {}
}
