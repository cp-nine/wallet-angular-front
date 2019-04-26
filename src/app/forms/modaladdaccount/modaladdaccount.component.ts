import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/models/account';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-modaladdaccount',
  templateUrl: './modaladdaccount.component.html',
  styleUrls: ['./modaladdaccount.component.css']
})
export class ModaladdaccountComponent implements OnInit {

  acnForm: FormGroup;
  submitted: boolean = false;
  accountNumber: number;
  message: string = '';
  accounts: Account[] = [];
  CIF: string;

  constructor(
    private fb: FormBuilder, 
    private service: AccountService,
    private service2: TransactionService) { }

  ngOnInit() {

    this.getAccountsService();

    this.acnForm = this.fb.group(
      {
        accountNumber: ['', Validators.required]
      }
    );

  }
  
  public get f() {
    return this.acnForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.acnForm.errors) {
      return;
    }

    this.addAccount();
  }

  addAccount(){
    this.service.addAccount(this.f.accountNumber.value, this.CIF).subscribe(
     resp => {
       if (resp.status != "20") {
         setTimeout(() => {
          alert(resp.message);
         }, 1000);
       } else {
        setTimeout(() => {
          alert(resp.message);
        }, 1000);
       }
     }
    );
  }
  
  getAccountsService(){
    this.service2.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          return this.accounts;
        } else {
          this.CIF = resp.data[0].account.customerNumber;
        }
      }
    );
  }
}
