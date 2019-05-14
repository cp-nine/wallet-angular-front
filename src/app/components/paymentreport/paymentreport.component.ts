import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Vtrx } from 'src/app/models/v-trx';

@Component({
  selector: 'app-paymentreport',
  templateUrl: './paymentreport.component.html',
  styleUrls: ['./paymentreport.component.css']
})
export class PaymentreportComponent implements OnInit {

  message: string = '';
  payments: Vtrx[] = [];
  cif: string;

  totalTrx: number =0;

  constructor(private service: TransactionService) { }

  ngOnInit() {

    setTimeout(() => {
      $(function(){
        $('#tb-payment').DataTable();
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
          this.payments = [];
          resp.data.forEach(t => {
            if (t.trxCode==="Payment") {
              this.payments.push(t);
            }

            this.totalTrx = this.totalTrx + t.amount;
          });
        }
      }
    );
  }

}
