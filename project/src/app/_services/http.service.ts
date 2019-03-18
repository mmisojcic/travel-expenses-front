import { BusinessTripDTO } from './../_dto/business-trip.dto';
import { BusinessTrip } from './../_models/business-trip.model';
import { CredentialsChangeDTO } from './../_dto/credentials-change.dto';
import { DestinationDTO } from './../_dto/destination.dto';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentialsDTO } from '../_dto/user-credentials.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterUserDataDTO } from '../_dto/register-data.dto';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { WageInfoDTO } from '../_dto/wage-info.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // url = 'https://http-client-practice.firebaseio.com/data.json';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  login(url: string, json: UserCredentialsDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        this.userService.setUpUser();
        console.log('login done');
      })
    );
  }

  register(url: string, json: RegisterUserDataDTO) {
    return this.http.post(url, json).pipe(
      finalize(() => {
        this.userService.setUpUser();
        console.log('register done');
      })
    );
  }
  //////////////////
  getDestinations(url: string) {
    return this.http.get(url).pipe(
      finalize(() => {
        console.log('desination get');
      })
    );
  }

  saveDestination(url: string, json: DestinationDTO) {
    return this.http.post(url, json, { observe: 'response' }).pipe(
      finalize(() => {
        console.log('desination saved');
      })
    );
  }
// get all business trips
  getBusinessTrips(url: string) {
    return this.http.get(url).pipe(
      finalize(() => {
        console.log('business trips get');
      })
    );
  }
// save new business trip
  saveBusinessTrip(url: string, json:BusinessTripDTO){
    return this.http.post(url, json, {observe:'response'}).pipe(
      finalize(() => {
        console.log('new business trip save done');
      })
    )
  }


getEmployeesOnTrip(url: string){
  return this.http.get(url).pipe(
    finalize(() => {
      console.log('employees on business trip get')
    })
  );
}


// wage change
  changeWage(url: string, json: WageInfoDTO) {
    return this.http.post(url, json, { observe: 'response' }).pipe(
      finalize(() => {
        console.log('wage info saved');
      })
    );
  }
  /////////////////////
  changeCredentials(url: string, json: CredentialsChangeDTO) {
    return this.http.post(url, json, { observe: 'response' }).pipe(
      finalize(() => {
        console.log('credentials change done');
      })
    );
  }

  // get statuses
  getStatuses(url: string){
    return this.http.get(url).pipe(
      finalize(() => {
        console.log('statuses get done');
      })
    )
  }
}
