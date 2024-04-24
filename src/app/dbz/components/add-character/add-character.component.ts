// Componente Secundario
import { Component, EventEmitter, Output } from '@angular/core';
import { Icharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  // Creación de instancia de emisor de eventos.
  @Output()
  public onNewCharacter: EventEmitter<Icharacter> = new EventEmitter();

  public character: Icharacter = {
    name: '',
    power: 0
  };

  emitcharacter(): void{
    // debugger;
    // funciona en dos direcciones
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character) // Emite los datos, hijo.
    this.character = { name: '', power: 0};// Una lectura y asignacion mas eficiente.

  }

}


