import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-structure';
  newText = '';
  constructor() {
  }

  changeText(){
    this.newText = 'Have to learn';
  }
}
