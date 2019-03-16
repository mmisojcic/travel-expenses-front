import { Injectable } from '@angular/core';
import { BusinessTrip } from './business-trip.model';

export class Employee {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public username?: string,
    public role?: string,
    public businessTrips?: BusinessTrip[]
  ) {}
}
