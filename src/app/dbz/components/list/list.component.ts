import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()// para importar propiedades externas, en este caso de main-page.
  public characterList: Icharacter[] = [{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDelete =  new EventEmitter<number>();
  dbzService: any;


  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje

    // Emitir el índice del personaje
    this.onDelete.emit(index);
    console.log({index})

    // this.characterList = [{ name: '', power: 0}];
  }

  onDeleteCharacterById(id: string): void {
    // Llamar al método deleteCharacterById del servicio
    this.dbzService.deleteCharacterById(id);
  }

}
