import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <div align="center">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
    <hr>
      <h3> Counter:  {{ counter }} </h3>
    </div>
    <div>
      <button (click)="increaseBy(+1)" > +1 </button>
      <button (click)="resetBy()" > Reset </button>
      <button (click)="increaseBy(-1)" > -1 </button>
    </div>
  </div>

  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  public title: string = 'Practica';
  public counter: number = 25;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetBy(): void {
    this.counter = 25;
}

  ngOnInit() { }
}

