import { Component, OnInit, Input } from '@angular/core';
import { Chart } from "chart.js";
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wallet: Wallet = new Wallet();
  accounts: Account[] = [];
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

  getTransaction(){
    this.service2.getTransaction(this.CIF).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
          console.log(this.message);
        } else {
          this.totalTransaction = resp.data.length;
          resp.data.forEach(t => {
            if (t.trxCode==="Top Up") {
              this.tTopup = this.tTopup + 1;
            } else if (t.trxCode==="Top Up By Account") {
              this.tTopup = this.tTopup + 1;
            } else if (t.trxCode==="Transfer") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Transfer Wallet To Wallet") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Transfer Wallet To Account") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Cash Withdrawal") {
              this.tCash = this.tCash + 1;
            } else if (t.trxCode==="Cash Withdrawal Account") {
              this.tCash = this.tCash + 1;
            } else if (t.trxCode==="Payment") {
              this.tPayment = this.tPayment + 1;
            }
          });
          this.activityChart();
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
          this.CIF = resp.data[0].account.customerNumber;

          resp.data.forEach(d => {
            this.accounts.push(d.account);
            this.totalBallance = this.totalBallance + d.account.ballance; 
          });  
          // total account
          this.totalAccount = this.accounts.length;
          this.getTransaction();
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

  

  // paymentChart(){
  //   var ctx = document.getElementById('paymentChart');
  //   var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// 	var config = {
  //     type: 'line',
	// 		data: {
	// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	// 			datasets: [{
	// 				label: 'Payment Duration',
	// 				backgroundColor: 'rgb(49, 158, 247)',
	// 				borderColor: 'rgb(49, 158, 247)',
	// 				data: [50, 80, 70, 80, 85, 81, 100],
	// 				fill: false,
	// 			}]
	// 		},
	// 		options: {
	// 			responsive: true,
	// 			tooltips: {
	// 				mode: 'index',
	// 				intersect: false,
	// 			},
	// 			hover: {
	// 				mode: 'nearest',
	// 				intersect: true
	// 			},
	// 			scales: {
	// 				xAxes: [{
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Month'
	// 					}
	// 				}],
	// 				yAxes: [{
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Value'
	// 					}
	// 				}]
	// 			}
	// 		}
  //   };
    
  //   new Chart(ctx, config);
  // }

}
