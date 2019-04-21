import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {

  isAccount:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  byAccount(){
    this.isAccount = !this.isAccount;
  }
}
