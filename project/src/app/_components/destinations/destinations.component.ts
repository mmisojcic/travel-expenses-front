import { DataConverter } from './../../_converters/data.converter';
import { WageInfo } from './../../_models/wage-info.model';
import { DestinationsService } from './../../_services/destinations.service';
import { Destination } from './../../_models/destination.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  destinationAnimation,
  newDestinationAnimation,
  destinationDimAnimation
} from 'src/app/_animations/destination.animation';
import { HttpService } from 'src/app/_services/http.service';
import { endPoint } from 'src/app/_config/end-points.config';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations: [
    destinationAnimation,
    newDestinationAnimation,
    destinationDimAnimation
  ]
})
export class DestinationsComponent implements OnInit {
  destination: Destination = new Destination();
  destinations: Destination[] = [];
  wages: WageInfo[] = [];

  destinationForm: FormGroup;
  wageForm: FormGroup;

  newDestinationTrigger = 'closed';
  animationTrigger = 'closed';

  edit = false;
  addButtonCaption = 'Add new';
  editButtonCaption = 'Edit';

  constructor(
    private destinationService: DestinationsService,
    private http: HttpService
  ) {}

  ngOnInit() {
    console.log('init');
    this.destinations = this.destinationService.destinations;
    this.destinationForm = new FormGroup({
      city: new FormControl(null, [
        Validators.required
        // Validators.pattern('^[A-Z][a-z][0-9]{2,30}$')
      ]),
      zipCode: new FormControl(null, [
        Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ]),
      wage: new FormControl(null, [
        Validators.required
        // Validators.pattern('^[A-Z][0-9]{6, 20}$')
      ])
    });
    this.wageForm = new FormGroup({
      amount: new FormControl(null)
    });
  }

  onDestination(index: number) {
    this.wages = this.destinations[index].wages;
    this.destination = this.destinations[index];
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
    this.destinationForm.reset();
  }

  onWageChange() {
    this.destination.wage = this.wageForm.get('amount').value;
  }

  onSave() {
    this.destination = new Destination(
      null,
      this.destinationForm.get('city').value,
      this.destinationForm.get('zipCode').value,
      this.destinationForm.get('wage').value,
      null
    );

    this.http
      .saveDestination(
        endPoint.baseUrl + endPoint.destination,
        DataConverter.destinationToJson(this.destination)
      )
      .subscribe(
        res => {
          console.log(res.status);
        },
        err => {
          console.log('destination save ' + err);
        }
      );
    console.log(this.destination);
    this.destinationForm.reset();
  }
}
