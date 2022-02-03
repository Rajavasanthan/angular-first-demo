import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngular';
  username = "Person 1";
  timer = 0;
  isEnabel = true;
  constructor(){
    
  }

  enabelBtn(){
    this.isEnabel = !this.isEnabel
  }

  incTimmer(){
    this.timer = this.timer + 1
  }

  // Function is a block of code with name
  // which will execute when ever it is called
  // it can have a parameter
  // execution can change based on the parameter
}
