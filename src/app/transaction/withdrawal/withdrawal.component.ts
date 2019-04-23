import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrxEntity } from 'src/app/models/trx-entity';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  withdrawalForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.withdrawalForm = this.fb.group({
      accountNumber: [''],
      amount: ['', Validators.required]
    });
  }

  public get f() {
    return this.withdrawalForm.controls;
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

  withdrawal(){
    this.submitted = true;


    if (this.f.amount.value < 50000) {
      this.message = "Cash minimum Rp.50,000.00";
    } else {
      this.trx.acnDebet = this.f.accountNumber.value;
      this.trx.trxCode = "T0004";
      this.trx.amount = this.f.amount.value;  

      this.withdrawalProcess(this.trx);
    }
  }

  withdrawalProcess(trx){
    this.service.cash(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Cash withdrawal failed";
        } else {
          this.message = "Cash withdrawal success";
        }
      }
    );
  }

}
