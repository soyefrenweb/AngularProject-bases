import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Icharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
} )
export class DbzService {

  constructor() { }

  public characters: Icharacter[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // aquí es donde se realiza la accion del emisor, en este caso para crear un nuevo objeto dentro de main.page. Recibe datos Padre.
  onNewCharacter( character: Icharacter): void {

    const newCharacter: Icharacter = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  deleteCharacter(index: number) {
      // Elimina el personaje del arreglo characters
      this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
      // Elimina el personaje del arreglo characters
      // this.characters.splice(index, 1);
      this.characters = this.characters.filter( character => character.id !== id);
  }



}
