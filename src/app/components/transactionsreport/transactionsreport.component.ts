import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Wallet } from 'src/app/models/wallet';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Vtrx } from 'src/app/models/v-trx';
import { AccountList } from 'src/app/models/account-list';

@Component({
  selector: 'app-transactionsreport',
  templateUrl: './transactionsreport.component.html',
  styleUrls: ['./transactionsreport.component.css']
})
export class TransactionsreportComponent implements OnInit {
  
  @Input()
  cif: string;
  wallet: Wallet = new Wallet();
  message: string = '';
  totalTrx: number = 0;
  trxList: Vtrx[] = [];
  accountList: AccountList[] = [];

  constructor(
    private service: TransactionService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      $(function(){
        $('#tb-transactions').DataTable();
      });
    }, 1500);
    
    this.accountNumber();

  }

  accountNumber(){
    this.service.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.cif = resp.data[0].account.customerNumber;
          resp.data.forEach(wa => {
            let al = new AccountList(wa.accountNumber);
            this.accountList.push(al);
          });
          this.getTransaction();
        }
      }
    );
  }

  getTransaction(){
    // this.accountList)
    this.service.getWalletTransaction(this.cif).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          resp.data.forEach(t => {
            if (this.wallet.type==='E-Merchant') {
              if (t.trxCode !== 'Payment' && t.trxCode !== 'Opening New Account') {
                this.trxList.push(t);
              }
            } else {
              this.trxList.push(t);
            }            
            this.totalTrx = this.totalTrx + t.amount;
          });
        }
      }
    );
    
  }

}
