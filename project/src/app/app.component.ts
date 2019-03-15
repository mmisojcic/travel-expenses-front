import { DestinationsDTO } from './_dto/destinations.dto';
import { Data } from './_tests/data.provider';
import { DataConverter } from 'src/app/_converters/data.converter';
import { endPoint } from './_config/end-points.config';
import { DestinationsService } from './_services/destinations.service';
import { EmployeeService } from './_services/employee.service';
import { Employee } from './_models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingAnimation } from './_animations/routing.animation';
import { HttpService } from './_services/http.service';
import { DestinationDTO } from './_dto/destination.dto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation]
})
export class AppComponent implements OnInit {
  title = 'Business trips';

  username = 'marko';
  dropdownMenu = false;
  userMenu = false;
  adminMenu = false;

  constructor(
    private destinationService: DestinationsService,
    private http: HttpService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    // get basic setup data for curent user from userservice via Subject
    this.employeeService.transferSetupData.subscribe(data => {
      this.adminMenu = data.adminMenu;
      this.userMenu = data.userMenu;
      this.username = data.username;
    });
  }

  onDestinations() {
    this.http.getDestinations(endPoint.destinations).subscribe(
      (res: DestinationDTO[]) => {
        this.destinationService.destinations = DataConverter.jsonToDestinations(
          res
        );
      },
      err => {
        console.log('get destinations error ' + err.status);
        this.destinationService.destinations = DataConverter.jsonToDestinations(
          Data.destinations
        );
        console.log(this.destinationService.destinations);
      }
    );
  }

  onLogout() {
    sessionStorage.removeItem(this.employeeService.session.name);
    this.employeeService.employee = undefined;
    this.employeeService.userCredentials = undefined;
    this.adminMenu = false;
    this.userMenu = false;
    this.router.navigateByUrl('/login');
    this.closeDropdownMenu();
  }

  onDropdownMenu() {
    this.dropdownMenu
      ? (this.dropdownMenu = false)
      : (this.dropdownMenu = true);
    console.log(this.dropdownMenu);
  }

  closeDropdownMenu() {
    if (this.dropdownMenu) {
      this.dropdownMenu = false;
    }
    console.log(this.dropdownMenu);
  }
}
