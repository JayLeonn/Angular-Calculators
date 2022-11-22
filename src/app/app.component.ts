import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data1: string = 'Hello1';
  data2: string = 'Hello2';


  change(ev: any): void {
    console.log(ev);
    this.data1 = 'CLICKED!';
    this.data2 = 'CLICKED ALSO!';
  }

/*   changeTwo(ev: any, data: any, extra: any): void {
    console.log(ev);
    this.data1 = data + '1';
    this.data2 = extra + '2';
  } */
}
