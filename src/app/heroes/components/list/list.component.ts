import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public originalNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  heroeBorrado: string = '';
  heroesBorrados: string[] = [];

  // Bandera
  mostrarHeroesBorrados: boolean = false;
  ocultarHeroesBorrados: boolean = false;
  mostrarMensajeAlerta: boolean = false;
  mensajeAlerta: string = '';


  removeLastHeroe(): void{
    if (this.heroNames.length > 0){
    this.heroeBorrado = this.heroNames.pop() || ''; // Almacenar el héroe borrado
    this.heroesBorrados.push(this.heroeBorrado); // Agregar el héroe borrado al array de héroes borrados
    }
  }

  regenerateList(): void {
    this.heroNames = [...this.originalNames];
  }

  eraseListHeroes(): void{
    this.heroesBorrados = [];
    this.mostrarHeroesBorrados = false; // Cuando se borran lo heroes, establece bandera en falso.
  }

  showDeletedHeroes(): void{
    this.mostrarHeroesBorrados = this.heroesBorrados.length > 0; // Establece la bandera en verdadero si hay héroes borrados, de lo contrario, en falso.
    this.ocultarHeroesBorrados = false; // Restablece la bandera en falso para asegurarse de que se muestren los héroes borrados

  }

  hideDeletedHeroes(): void{
    this.ocultarHeroesBorrados = true; // Establecer la bandera en true para ocultar los héroes borrados
    this.mostrarHeroesBorrados = false; // Restablecer la bandera en false para asegurarse de que se oculten los héroes borrados
  }

  // se actualiza git, en mi rama efrengit-desarrollo. 


}
