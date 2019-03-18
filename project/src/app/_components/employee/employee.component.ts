import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  currentBusinessTrip: BusinessTrip = new BusinessTrip();
  currentBusinessTripTotalBill = 0;
  currentBusinessTripBillItemsTotal = [];

  // mock status array. later to be filled with real data
  tripStatuses = [
    new TripStatus(1, 'ongoing'),
    new TripStatus(2, 'upcoming'),
    new TripStatus(3, 'finished'),
    new TripStatus(4, 'canceled')
  ];
  // single status
  // status = 'upcoming';

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
    this.currentBusinessTrip = this.employee.businessTrips[0];

    // total business trip expense
    this.billItemsTotal();
    this.businessTripTotal();
    //////////////////////////////
    // statusForm init
    this.statusForm = new FormGroup({
      status: new FormControl(Validators.required)
    });
  }

  changeStatus() {
    const i = this.statusForm.get('status').value;
    const status = new TripStatus(i, this.tripStatuses[i - 1].name);

    console.log(status);
  }

  onBusinessTrip(businessTrip: BusinessTrip) {
    this.currentBusinessTrip = businessTrip;
    // this.status = businessTrip.status;
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
      color = '#007bff';
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
    // this.status = status;
    // console.log(this.status);
    console.log(this.statusForm);
  }

  dateFormater(date: Date) {}

  billItemsTotal() {
    // get sum of bill items
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.currentBusinessTrip.bills.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      let sum = 0;
      // tslint:disable-next-line:prefer-for-of
      for (
        let j = 0;
        j < this.currentBusinessTrip.bills[i].billItems.length;
        j++
      ) {
        sum += this.currentBusinessTrip.bills[i].billItems[j].cost;
      }
      this.currentBusinessTripBillItemsTotal.push(sum);
    }
  }

  businessTripTotal() {
    for (const b of this.currentBusinessTripBillItemsTotal) {
      this.currentBusinessTripTotalBill += b;
    }
    this.currentBusinessTripTotalBill += this.currentBusinessTrip.destination.currentWage;
  }
}
