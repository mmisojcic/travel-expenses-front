import { Component, OnInit } from '@angular/core';
import { businessTripAnimation, employeeAnimation } from 'src/app/_animations/business-trip.animation';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss'],
  animations: [businessTripAnimation, employeeAnimation]
})
export class AllEmployeesComponent implements OnInit {
  businessTripTrigger = 'open';
  constructor() { }

  ngOnInit() {
  }
  onBusinessTrip() {
    //this.businesTrip = this.employee.businessTrips[ind - 1];
    //console.log(this.businesTrip);
    this.businessTripTrigger = 'open';
  }
  onCloseBusinessTrip() {
    this.businessTripTrigger = 'closed';
  }
}
