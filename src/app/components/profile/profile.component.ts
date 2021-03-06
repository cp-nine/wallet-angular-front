import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Wallet } from 'src/app/models/wallet';
import { Account } from 'src/app/models/account';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  wallet: Wallet = new Wallet();
  accounts: Account[] = [];
  totalAccount: number = 0;
  showAccount:boolean = false;
  totalBallance: number = 0;

  @Input()
  isEdit:boolean = false;

  message: string;

  constructor(
    private service: WalletService,
    private service2: TransactionService
  ) { }

  ngOnInit() {
    // this.refresh();
    this.getProfile();
    this.accountNumber();
  }

  private refresh(){
    this.service.refresh.subscribe(
      () => {
        this.getProfile();
      }
    );
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

  accountNumber(){
    this.service2.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          resp.data.forEach(wa => {
            this.accounts.push(wa.account);
            this.totalAccount = this.accounts.length;
            this.totalBallance = wa.account.ballance;
          });
        }
      }
    );
  }

  editPage(){
    this.isEdit = !this.isEdit;
    this.getProfile();
  }

  lookAccount(){
    this.showAccount = !this.showAccount;
  }

}
