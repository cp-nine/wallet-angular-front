import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transfer2',
  templateUrl: './transfer2.component.html',
  styleUrls: ['./transfer2.component.css']
})
export class Transfer2Component implements OnInit {

  transferPage:boolean = false;

  @Output()
  transferEmiter = new EventEmitter();

  isAccount:boolean = false;

  trx: TrxEntity = new TrxEntity();
  message: string = '';

  account: number;

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
      destinationNumber: ['', Validators.required],
      accountNumber: [''],
      amount: ['', Validators.required]
    });
  }

  transfer(){
    this.submitted = true;

    if (this.f.destinationNumber.value === this.account){
      this.message = "Cannot transfer to your self";
    } else {

      this.trx.acnCredit = this.f.destinationNumber.value;
      this.trx.acnDebet = this.account;
      this.trx.trxCode = "T0004";
      this.trx.amount = this.f.amount.value;    
      
      // alert(JSON.stringify(this.trx));
      this.transferByAccount(this.trx);
    }

  }

  transferByAccount(trx: TrxEntity){
    this.service.transfer(trx).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
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

  async accountNumber(){
    let resp = await this.service.getWalletAccount().toPromise();
    if (resp.status !== "20") {
      this.message = resp.message;
    } else {
        this.account = resp.data[0].accountNumber;
    }
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
