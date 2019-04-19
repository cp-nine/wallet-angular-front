import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Bank';

  arrUrl = []; 
  currentUrl: string; 

  constructor(){
    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }
}
