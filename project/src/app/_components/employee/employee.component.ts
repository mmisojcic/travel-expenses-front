import { DataConverter } from './../../_converters/data.converter';
import { EmployeeDTO } from './../../_dto/employee.dto';
import { BusinessTrip } from './../../_models/business-trip.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';

import * as employee from '../../../app/_tests/employee.json';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  json = employee.default;
  employee: Employee;

  businessTrip: BusinessTrip;
  businessTrips: BusinessTrip[] = [];

  constructor() {}

  ngOnInit() {
    this.employee = DataConverter.jsonToEmployee(this.json);

    console.log(JSON.stringify(DataConverter.employeeToJson(this.employee)));
    console.log(this.employee);
  }

  dateFormater(date: Date) {}
}
