import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrxEntity } from 'src/app/models/trx-entity';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // paymentPage:boolean=false;

  @Output()
  transferEmiter = new EventEmitter();

  isAccount:boolean = false;

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  wtwForm: FormGroup;
  submitted: boolean = false;

  cashTag: string;

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.wtwForm = this.fb.group({
      cashTag: [''],
      amount: ['', Validators.required]
    });
  }

  transfer(){
    this.submitted = true;

      this.trx.acnDebet = this.accounts[0].accountNumber;
      this.trx.trxCode = "T0009";
      this.trx.amount = this.f.amount.value; 
      
      this.cashTag = this.f.cashTag.value;

      this.transferByAccount(this.trx);
  }

  transferByAccount(trx: TrxEntity){
    this.service.transferWtw(trx, this.cashTag).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Failed";
        } else {
          this.message = "Success";
        }
      }
    );
  }

  public get f() {
    return this.wtwForm.controls;
  }

  accountNumber(){
    this.service.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          resp.data.forEach(d => {
            this.accounts.push(d.account);
          });  
        }
      }
    );
  }

  toAccount(){
    this.isAccount = !this.isAccount;
  }

}
