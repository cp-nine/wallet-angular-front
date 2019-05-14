import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-cash-account',
  templateUrl: './cash-account.component.html',
  styleUrls: ['./cash-account.component.css']
})
export class CashAccountComponent implements OnInit {

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  @Output()
  emmiter = new EventEmitter();

  // process
  waForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.waForm = this.fb.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  public get f() {
    return this.waForm.controls;
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
          
          // console.log(this.accounts)
        }
      }
    );
  }

  withdrawal(){
    this.submitted = true;

    if (this.waForm.errors) {
      return;
    }

    if (this.f.amount.value < 50000) {
      this.message = "Cash minimum Rp.50,000.00";
    } else {
      this.trx.acnDebet = this.accounts[0].accountNumber;
      this.trx.trxCode = "T0008";
      this.trx.amount = this.f.amount.value;  

      this.withdrawalProcess(this.trx);
    }
  }

  withdrawalProcess(trx){
    this.service.cashAccount(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
          this.emmit();
        } else {
          this.message = "Cash withdrawal success";
          this.emmit();
        }
      }
    );
  }

  emmit(){
    setTimeout(() => {
      this.emmiter.emit();
    }, 1000);
  }

}
