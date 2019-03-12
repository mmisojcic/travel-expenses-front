import {
  trigger,
  animate,
  transition,
  style,
  query,
  state
} from '@angular/animations';

export const newDestinationAnimation = trigger('newDestinationAnimation', [
  state(
    'open',
    style({
      width:'75%',
      opacity: 1
      
    })
  ),
  state(
    'closed',
    style({
      width:'0',
      opacity: 0
    })
  ),
  transition('open => closed', [animate('0.4s ease-in')]),
  transition('closed => open', [animate('0.4s ease-out')])
]);

export const destinationsAnimation = trigger('destinationsAnimation', [
  state(
    'open',
    style({
      opacity: 0.3
    })
  ),
  state(
    'closed',
    style({
      opacity: 1
    })
  ),
  transition('open => closed', [animate('0.4s ease-in')]),
  transition('closed => open', [animate('0.4s ease-out')])
]);
