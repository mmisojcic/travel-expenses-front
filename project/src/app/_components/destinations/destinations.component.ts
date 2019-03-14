import { Destination } from './../../_models/destination.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  newDestinationAnimation,
  destinationAnimation,
  destinationDimAnimation
} from 'src/app/_animations/destination.animation';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations: [newDestinationAnimation, destinationAnimation,destinationDimAnimation]
})
export class DestinationsComponent implements OnInit {
  destinationForm:FormGroup;
  newDestinationTrigger = 'closed';
  animationTrigger = 'closed';

  edit = false;
  addButtonCaption = 'Add new';
  editButtonCaption = 'Edit';

  // testArr
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor() {}

  ngOnInit() {
    this.destinationForm = new FormGroup({
      city: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][a-z][0-9]{2,30}$')
      ]),
      zipCode: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ]),
      wage: new FormControl(null, [
        // Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ])
    });
  }

  onDestination(index: number) {
    this.animationTrigger = 'open';
    console.log(index);
  }
  onCloseDestination() {
    this.animationTrigger = 'closed';
  }

  onNewDestinations(input: HTMLInputElement) {
    this.newDestinationTrigger === 'closed'
      ? (this.newDestinationTrigger = 'open')
      : (this.newDestinationTrigger = 'closed');
    this.addButtonCaption === 'Add new'
      ? (this.addButtonCaption = 'Cancel')
      : (this.addButtonCaption = 'Add new');
    input.focus();
  }

  onSave(){
    
  }
}
