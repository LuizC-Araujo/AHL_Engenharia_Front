import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from '../../pages/pages-menu';

@Component({
  selector: 'ngx-colaborador',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = MENU_ITEMS;

}
