import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  counter = 0;
  counterArr = [];

  onDisplay() {
    if(this.showContent === false){
      this.showContent = true;
    } else {
      this.showContent = false;
    }
    this.counterArr.push(this.counter++);
  }
}
