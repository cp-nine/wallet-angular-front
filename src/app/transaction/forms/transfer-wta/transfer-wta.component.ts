import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transfer-wta',
  templateUrl: './transfer-wta.component.html',
  styleUrls: ['./transfer-wta.component.css']
})
export class TransferWtaComponent implements OnInit {

  transferPage:boolean = false;

  @Output()
  transferEmiter = new EventEmitter();

  isAccount:boolean = false;

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  accounts: Account[] = [];

  // process
  wtaForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private service: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.accountNumber();
    this.wtaForm = this.fb.group({
      cashTag: [''],
      destinationNumber: [''],
      accountNumber: [''],
      amount: ['', Validators.required]
    });
  }

  transfer(){
    this.submitted = true;

      this.trx.acnCredit = this.f.destinationNumber.value;
      this.trx.acnDebet = this.accounts[0].accountNumber;
      this.trx.trxCode = "T0006";
      this.trx.amount = this.f.amount.value;    
      
      this.transferByAccount(this.trx);
  }

  transferByAccount(trx: TrxEntity){
    this.service.transferWta(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = "Transfer failed";
        } else {
          this.message = "Transfer success";
        }
      }
    );
  }

  public get f() {
    return this.wtaForm.controls;
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
