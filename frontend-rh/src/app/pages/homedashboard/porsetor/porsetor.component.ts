import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-porsetor',
  templateUrl: './porsetor.component.html',
  styleUrls: ['./porsetor.component.scss']
})
export class PorsetorComponent implements OnInit {

  setor1 = "1";
  setor2 = "2";
  setor3 = "3";
  setor4 = "4";
  setor5 = "5";
  setor6 = "6";

  constructor() { }

  ngOnInit(): void {
  }

}
