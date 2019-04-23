import { Component, OnInit, Input } from '@angular/core';
// import * as $ from 'jquery';
// import 'datatables.net-bs4';
import { Wallet } from 'src/app/models/wallet';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Vtrx } from 'src/app/models/v-trx';

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
  trxList: Vtrx[];

  constructor(
    private service: TransactionService
  ) { }

  ngOnInit() {
    // $('#tb-transactions').DataTable();
    
    this.accountNumber();
  }

  accountNumber(){
    this.service.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.cif = resp.data[0].account.customerNumber;
          this.getTransaction();
        }
      }
    );
  }

  getTransaction(){
    this.service.getTransaction(this.cif).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.trxList = resp.data;

          resp.data.forEach(t => {
            this.totalTrx = this.totalTrx + t.amount;
          });
        }
      }
    );
  }

}
