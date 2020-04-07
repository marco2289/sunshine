import { Component, OnInit } from '@angular/core';
import '../../../node_modules/froala-editor/js/languages/es.js';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public dataFroala: object = {
    placeholderText: 'Aqui puedes escribir tu contenido!',
    charCounterCount: false
  };


  constructor() { }

  ngOnInit(): void {
  }


}
