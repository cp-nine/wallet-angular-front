import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  isAccount:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toAccount(){
    this.isAccount = !this.isAccount;
  }

}
