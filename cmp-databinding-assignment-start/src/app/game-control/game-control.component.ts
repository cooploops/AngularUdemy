import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() numberIncremented = new EventEmitter<{Integer: number}>()
integer: number = 0;

butt = null;

  constructor() {

   }

  ngOnInit() {
  }

  onStart(){
    this.butt = setInterval(() => {this.numberIncremented.emit({Integer:++this.integer})},1000);
  }

  onStop(){
    clearInterval(this.butt);
  }

}
