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
  emmiter = new EventEmitter();

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
    this.service.payment(trx, this.cashTag).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
          this.emmit();
        } else {
          this.message = "Success";
          this.emmit();
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

  emmit(){
    setTimeout(() => {
      this.emmiter.emit();
    }, 1000);
  }

}
