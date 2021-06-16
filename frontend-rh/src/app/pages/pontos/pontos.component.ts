import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from '../../pages/pages-menu';

@Component({
  selector: 'ngx-pontos',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./pontos.component.scss']
})
export class PontosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = MENU_ITEMS;

}
