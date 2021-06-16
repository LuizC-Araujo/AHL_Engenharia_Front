import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from '../../pages/pages-menu';

@Component({
  selector: 'ngx-minhaconta',
  template: '<ngx-alterar></ngx-alterar>',
  styleUrls: ['./minhaconta.component.scss']
})
export class MinhacontaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu = MENU_ITEMS;

}
