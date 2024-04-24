// Componente principal
import { Component, OnInit } from '@angular/core';
import { Icharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
  constructor( public dbzService: DbzService ) { }



  ngOnInit(){}

}
