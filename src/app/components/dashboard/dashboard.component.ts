import { Component, OnInit, Input } from '@angular/core';
import { Chart } from "chart.js";
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/models/account';
import { AccountList } from 'src/app/models/account-list';
import { Vtrx } from 'src/app/models/v-trx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wallet: Wallet = new Wallet();

  accounts: Account[] = [];
  trxList: Vtrx[] = [];
  totalBallance: number = 0;
  totalAccount: number = 0;
  tTopup: number = 0;
  tCash: number = 0;
  tTrans: number = 0;
  tPayment: number = 0;

  @Input()
  CIF: string;

  @Input()
  isEdit:boolean = false;

  message: string;
  totalTransaction: number = 0;
  accountList: AccountList[] = [];

  constructor(
    private service: WalletService,
    private service2: TransactionService
  ) { }

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

  get actibeBallance(){
    return this.wallet.activeBallance;
  }

  ngOnInit() {
    this.getProfile();
    this.accountNumber();

    // this.getTransaction();
    
    // this.paymentChart();
  }

  accountNumber(){
    this.service2.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.CIF = resp.data[0].account.customerNumber;
          resp.data.forEach(wa => {
            this.accounts.push(wa.account);
            this.totalAccount = this.accounts.length;
            let al = new AccountList(wa.accountNumber);
            this.accountList.push(al);
            this.totalBallance = this.totalBallance + wa.account.ballance;
          });
          this.getTransaction();
        }
      }
    );
  }

  getTransaction(){
    this.service2.getWalletTransaction(this.CIF, this.accountList).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
          console.log(this.message);
        } else {
          resp.data.forEach(t => {
            if (t.trxCode==="Top Up") {
              this.tTopup = this.tTopup + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Top Up By Account") {
              this.tTopup = this.tTopup + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Transfer") {
              this.tTrans = this.tTrans + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Transfer Wallet To Wallet") {
              this.tTrans = this.tTrans + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Transfer Wallet To Account") {
              this.tTrans = this.tTrans + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Cash Withdrawal") {
              this.tCash = this.tCash + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Cash Withdrawal Account") {
              this.tCash = this.tCash + 1;
              this.trxList.push(t);
            } else if (t.trxCode==="Payment") {
              this.tPayment = this.tPayment + 1;
              this.trxList.push(t);
            }
          });

          this.activityChart();
          this.totalTransaction = this.trxList.length;
        }
      }
    );
  }

  activityChart(){

    var ctx = document.getElementById('myChart');
    var data = {
      datasets: [{
        data: [this.tTopup, this.tTrans, this.tCash, this.tPayment],
        backgroundColor: [
          "rgb(48, 219, 162)",
          "rgb(49, 158, 247)",
          "rgb(229, 71, 71)",
          "rgb(245, 255, 61)"
        ],
      }],
      labels: [
        'Top Up',
        'Transfer',
        'Withdrawal',
        'Payment'
      ]
    };
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true
      }
    });
  }


}
