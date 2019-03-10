import { UserService } from './_services/user.service';
import { Employee } from './_models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingAnimation } from './_animations/routing.animation';

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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // get basic setup data for curent user from userservice via Subject
    this.userService.transferSetupData.subscribe(data => {
      this.adminMenu = data.adminMenu;
      this.userMenu = data.userMenu;
      this.username = data.username;
    });
  }

  onLogout() {
    sessionStorage.removeItem(this.userService.session.name);
    this.userService.employee = null;
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
