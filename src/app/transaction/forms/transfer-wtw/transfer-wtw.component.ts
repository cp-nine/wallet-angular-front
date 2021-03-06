import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transfer-wtw',
  templateUrl: './transfer-wtw.component.html',
  styleUrls: ['./transfer-wtw.component.css']
})
export class TransferWtwComponent implements OnInit {

  transferPage:boolean = false;

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
      cashTag: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  transfer(){
    this.submitted = true;

      this.trx.acnDebet = this.accounts[0].accountNumber;
      this.trx.trxCode = "T0005";
      this.trx.amount = this.f.amount.value; 
      
      this.cashTag = this.f.cashTag.value;

      this.transferByAccount(this.trx);
  }

  transferByAccount(trx: TrxEntity){
    this.service.transferWtw(trx, this.cashTag).subscribe(
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
      this.transferEmiter.emit();
    }, 1000);
  }

}
