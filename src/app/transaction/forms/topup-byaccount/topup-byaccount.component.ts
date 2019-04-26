import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-topup-byaccount',
  templateUrl: './topup-byaccount.component.html',
  styleUrls: ['./topup-byaccount.component.css']
})
export class TopupByaccountComponent implements OnInit {

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  topUpForm: FormGroup;
  submitted: boolean = false;

  @Output()
  emmiter = new EventEmitter();

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.topUpForm = this.fb.group({
      byAccount: [''],
      accountNumber: [''],
      amount: ['', Validators.required]
    });
  }

  topUp(){
    this.submitted = true;


    if (this.f.amount.value < 1000) {
      this.message = "Top Up minimum Rp.1,000.00";
    } else {
      this.trx.acnDebet = this.f.accountNumber.value;
      this.trx.trxCode = "T0003";
      this.trx.amount = this.f.amount.value;    
      
      this.topUpByAccount(this.trx);
    }
  }

  topUpByAccount(trx: TrxEntity){
    this.service.topUpByAccount(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Top up failed";
          this.emmit();
        } else {
          this.message = "Top up success";
          this.emmit();
        }
      }
    );
  }

  emmit(){
    setTimeout(() => {
      this.emmiter.emit();
    }, 2000);
  }

  public get f() {
    return this.topUpForm.controls;
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

}
