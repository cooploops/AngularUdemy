import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  isItEmpty(){
    if (this.username === ''){
      return true;
    } else {
      return false
    }
  }

  resetName(){
    this.username = '';
  }
}
