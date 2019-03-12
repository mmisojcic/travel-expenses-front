import { Component, OnInit } from '@angular/core';
import { newDestinationAnimation, destinationsAnimation } from 'src/app/_animations/destination.animation';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations:[newDestinationAnimation, destinationsAnimation]
})
export class DestinationsComponent implements OnInit {
animationTrigger='closed';

  constructor() { }

  ngOnInit() {
  }
onNewDestinations(){
  this.animationTrigger === 'closed' ? this.animationTrigger = 'open' : this.animationTrigger = 'closed' ;

}
}
