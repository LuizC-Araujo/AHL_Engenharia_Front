import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-authrh',
  template: `
    <ngx-two-columns-layout>
      <router-outlet></router-outlet>
    </ngx-two-columns-layout>
  `,
  styleUrls: ['./authrh.component.scss']
})
export class AuthrhComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
