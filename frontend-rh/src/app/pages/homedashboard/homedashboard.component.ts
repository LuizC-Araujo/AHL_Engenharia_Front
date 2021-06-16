import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from '../../pages/pages-menu';

@Component({
  selector: 'ngx-homedashboard',
  template: `
  <ngx-porcolaborador></ngx-porcolaborador>`,
  styleUrls: ['./homedashboard.component.scss']
})
export class HomedashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = MENU_ITEMS;

}
