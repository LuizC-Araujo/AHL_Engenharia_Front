import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
