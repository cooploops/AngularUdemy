import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
gameNumbersOdd: number[] = [];
gameNumbersEven: number[] = [];

  onNumberIncremented(num:{Integer:number}){
    console.log(num.Integer);
    if(num.Integer%2 === 0){
      this.gameNumbersEven.push(num.Integer);
    } else {
      this.gameNumbersOdd.push(num.Integer);
    }
  }
}
