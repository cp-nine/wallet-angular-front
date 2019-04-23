import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/models/account';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-wallettransaction',
  templateUrl: './wallettransaction.component.html',
  styleUrls: ['./wallettransaction.component.css']
})
export class WallettransactionComponent implements OnInit {

  topupPage:boolean=false;
  transferPage:boolean=false;
  withdrawalPage:boolean=false;
  paymentPage:boolean=false;

  accounts: Account[] = [];
  wallet: Wallet = new Wallet();
  message: string = '';
  totalBallance: number = 0;

  isEbanking: boolean = false;

  constructor(
    private service: WalletService,
    private service2: TransactionService
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.getActiveBallance();
  }

  getActiveBallance(){
    this.service.getProfile().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.wallet = resp.data;

          if (resp.data.type === "E-Banking") {
            this.isEbanking = true;
          } else {
            this.isEbanking = true;
          }
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
          resp.data.forEach(d => {
            this.accounts.push(d.account);
            this.totalBallance = this.totalBallance + d.account.ballance; 
          });  
        }
      }
    );
  }

  topup(){
    this.paymentPage = false;
    this.withdrawalPage = false;
    this.transferPage = false;

    this.topupPage = !this.topupPage;
    // this.router.navigate([{ outlets: { content: ['top-up'] }}],{ relativeTo: this.route }); 
    // this.router.navigateByUrl("/transaction/top-up",{skipLocationChange:true}); 
  }

  transfer(){
    this.paymentPage = false;
    this.withdrawalPage = false;
    this.topupPage = false;

    this.transferPage = !this.transferPage;
  }

  withdrawal(){
    this.paymentPage = false;
    this.transferPage = false;
    this.topupPage = false;

    this.withdrawalPage = !this.withdrawalPage;
  }

  payment(){
    this.withdrawalPage = false;
    this.topupPage = false;
    this.transferPage = false;
    this.topupPage = false;
    
    this.paymentPage = !this.paymentPage;
  }

  transEmit(){
    this.transferPage = !this.transferPage;
  }

}
