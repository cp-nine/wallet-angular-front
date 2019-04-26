import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-main-transfer',
  templateUrl: './main-transfer.component.html',
  styleUrls: ['./main-transfer.component.css']
})
export class MainTransferComponent implements OnInit {

  transferPage:boolean = false;

  @Output()
  transferEmiter = new EventEmitter();

  isAccount:boolean = false;

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  mtForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.mtForm = this.fb.group({
      cashTag: [''],
      destinationNumber: [''],
      accountNumber: [''],
      amount: ['', Validators.required]
    });
  }

  transfer(){
    this.submitted = true;

      this.trx.acnCredit = this.f.destinationNumber.value;
      this.trx.acnDebet = this.f.accountNumber.value;
      this.trx.trxCode = "T0004";
      this.trx.amount = this.f.amount.value;    
      
      this.transferByAccount(this.trx);
  }

  transferByAccount(trx: TrxEntity){
    this.service.transfer(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Transfer failed";
          this.emmit();
        } else {
          this.message = "Transfer success";
          this.emmit();
        }
      }
    );
  }

  public get f() {
    return this.mtForm.controls;
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
      this.transferEmiter.emit();
    }, 1000);
  }

}
