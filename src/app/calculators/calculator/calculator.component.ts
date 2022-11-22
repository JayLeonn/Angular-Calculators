import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator', //<app-calculator>
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  fig1: number = 10;
  fig2: number = 15;

  eventFig1: number = 10;
  eventFig2: number = 15;

  calculatedResult: number = 0; //Can use this OR a getter 

  calculate(ev: any) {
    console.log('Im called everytime keyup event is fired!');
    console.log(ev.target); // input element

    let id: string = ev.target.id;
    let value: number = Number(ev.target.value);

    if (id == 'eventFig1') {
      this.eventFig1 = value;
    }
    if (id == 'eventFig2') {
      this.eventFig2 = value;
    }
    this.calculatedResult = this.eventFig1 + this.eventFig2;
  }

  //Alternative solution to the calculatedResult variable (Notice: there is a difference in how they work though!)
  get result(): number {
    console.log('Called a getter!');
    return this.eventFig1 + this.eventFig2;
  }
}
