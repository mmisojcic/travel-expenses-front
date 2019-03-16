import { Component, OnInit } from '@angular/core';
import {
  employeeAnimation,
  businessTripAnimation
} from 'src/app/_animations/business-trip.animation';

@Component({
  selector: 'app-business-trips',
  templateUrl: './business-trips.component.html',
  styleUrls: ['./business-trips.component.scss'],
  animations: [employeeAnimation, businessTripAnimation]
})
export class BusinessTripsComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  animationTrigger = 'closed';
  constructor() {}

  ngOnInit() {}

  onBusinessTrip(index: number) {
    this.animationTrigger = 'open';
    console.log(index);
  }
  onCloseBusinessTrip() {
    this.animationTrigger = 'closed';
  }
}
