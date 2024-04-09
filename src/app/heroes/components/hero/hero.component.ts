import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Siuuuuuu';
  public nameSpiterman: string = 'Spiterman oraa cara...';
  public edad: number = 25;


  get capitalizedName(): string {
    if (this.name) {
      return this.name.toUpperCase();
    } else {
      return "not capitalized";
    }
}

  getHeroDescription(): string {
    if(this.name && this.edad){
    return `${ this.name} - ${ this.edad }`;
  } else {
    return "not found";
  }

  }

  changeHero(): void {
    this.name = 'Alexis Fierro';
  }

  changeEdad(): void {
    this.edad = 30;
  }

  resetBy(): void {
    this.edad = 25;
}

  addNewUser(): void {
    this.name = 'Bon';
    this.edad = 26;
  }

  eraseData(): void {
    this.name = 'Add new user';
    this.edad = 0;
  }

}  

