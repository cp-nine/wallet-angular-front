import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Mini Bank';

  arrUrl = []; 
  currentUrl: string; 

  isLogin: boolean = false;

  constructor(){
    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }

  ngOnInit(){
    if(localStorage.getItem("user") !== null){
      this.isLogin = true;
    }
  }

  ngDoCheck(){
    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }
}
