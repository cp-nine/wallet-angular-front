import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Router } from '@angular/router';

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

  @Output()
  emmitter = new EventEmitter();

  constructor(
    private service: TransactionService,
    private fb: FormBuilder,
    private router: Router
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
        console.log(resp);
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
      this.emmitter.emit();
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
