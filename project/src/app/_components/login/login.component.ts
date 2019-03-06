import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test() {
    const token = { name: 'Marko', pass: '1234' };
    localStorage.setItem('userKao', JSON.stringify(token));
  }
}
