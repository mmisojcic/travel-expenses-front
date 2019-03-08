import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  dropdownMenu = false;
  user = true;
  admin = true;

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
