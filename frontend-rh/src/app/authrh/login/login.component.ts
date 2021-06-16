import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-login',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
