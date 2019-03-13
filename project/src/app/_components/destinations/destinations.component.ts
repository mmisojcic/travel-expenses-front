import { Component, OnInit } from '@angular/core';
import {
  newDestinationAnimation,
  destinationAnimation
} from 'src/app/_animations/destination.animation';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations: [newDestinationAnimation, destinationAnimation]
})
export class DestinationsComponent implements OnInit {
  newDestinationTrigger = 'closed';
  destinationTrigger = 'closed';

  edit = false;
  addButtonCaption = 'Add new';
  editButtonCaption = 'Edit';

  // testArr
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor() {}

  ngOnInit() {}

  onDestination(index: number) {
    this.destinationTrigger = 'open';
    console.log(index);
  }
  onCloseDestination() {
    this.destinationTrigger = 'closed';
  }

  onNewDestinations(input: HTMLInputElement) {
    this.newDestinationTrigger === 'closed'
      ? (this.newDestinationTrigger = 'open')
      : (this.newDestinationTrigger = 'closed');
    this.addButtonCaption === 'Add new'
      ? (this.addButtonCaption = 'Save')
      : (this.addButtonCaption = 'Add new');
    input.focus();
  }
}
