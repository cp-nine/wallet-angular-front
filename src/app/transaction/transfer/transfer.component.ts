import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Account } from 'src/app/models/account';
import { TrxEntity } from 'src/app/models/trx-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transferPage:boolean = false;

  @Output()
  transferEmiter = new EventEmitter();
  @Input()
  isBanking: boolean;

  isAccount:boolean = false;

  // trx: TrxEntity = new TrxEntity();
  // message: string = '';

  // accounts: Account[] = [];

  // // process
  // transferForm: FormGroup;
  // submitted: boolean = false;

  constructor(
    // private service: TransactionService,
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.accountNumber();
    // this.transferForm = this.fb.group({
    //   cashTag: [''],
    //   destinationNumber: [''],
    //   accountNumber: [''],
    //   amount: ['', Validators.required]
    // });
  }

  emmit(){
    this.transferEmiter.emit();
  }

  // transfer(){
  //   this.submitted = true;

  //     this.trx.acnCredit = this.f.destinationNumber.value;
  //     this.trx.acnDebet = this.f.accountNumber.value;
  //     this.trx.trxCode = "T0003";
  //     this.trx.amount = this.f.amount.value;    
      
  //   alert(JSON.stringify(this.transferForm.value));
  //     // this.transferByAccount(this.trx);
  // }

  // transferByAccount(trx: TrxEntity){
  //   this.service.transfer(trx).subscribe(
  //     resp => {
  //       if (resp.status !== "20") {
  //         this.message = "Transfer failed";

  //         this.emmit();
  //       } else {
  //         this.message = "Transfer success";

  //         this.emmit();
  //       }
  //     }
  //   );
  // }

  // public get f() {
  //   return this.transferForm.controls;
  // }

  // accountNumber(){
  //   this.service.getWalletAccount().subscribe(
  //     resp => {
  //       if (resp.status !== "20") {
  //         this.message = resp.message;
  //       } else {
  //         resp.data.forEach(d => {
  //           this.accounts.push(d.account);
  //         });  
  //       }
  //     }
  //   );
  // }

  // toAccount(){
  //   this.isAccount = !this.isAccount;
  // }

  

}
