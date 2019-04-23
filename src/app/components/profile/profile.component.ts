import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  wallet: Wallet = new Wallet();

  @Input()
  isEdit:boolean = false;

  message: string;

  constructor(
    private service: WalletService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.service.getProfile().subscribe(
      response => {
        if (response.status !== "20") {
          this.message = response.message;
        } else {
          this.wallet = response.data; 
        }
      }
    );
  }

  editPage(){
    this.isEdit = !this.isEdit;
  }

}
