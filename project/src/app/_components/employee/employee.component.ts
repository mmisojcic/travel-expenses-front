import { BusinessTrip } from './../../_models/business-trip.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee(1, 'Marko', 'Markovic', 'mail@gmail.com', 'mmarko', 'pass1234', 'user');
  businessTrip: BusinessTrip = new BusinessTrip(1, 'Belgrade', '14-mar-2019', '17-mar-2019', 'Active');
  businessTrips: BusinessTrip[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.businessTrip)
    for(let i = 0; i < 100; i++){
      this.businessTrips.push(this.businessTrip);
    }
  }


  dateFormater(date:Date){

  }
}
