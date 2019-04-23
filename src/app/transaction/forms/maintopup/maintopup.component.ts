import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-maintopup',
  templateUrl: './maintopup.component.html',
  styleUrls: ['./maintopup.component.css']
})
export class MaintopupComponent implements OnInit {

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  topUpForm: FormGroup;
  submitted: boolean = false;

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
      this.trx.acnCredit = this.accounts[0].accountNumber;
      this.trx.trxCode = "T0002";
      this.trx.amount = this.f.amount.value;    
      
      this.topUpByAccount(this.trx);
    }
  }

  topUpByAccount(trx: TrxEntity){
    this.service.topUp(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Top up failed";
        } else {
          this.message = "Top up success";
        }
      }
    );
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
