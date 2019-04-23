import { Injectable } from '@angular/core';
import { TransactionService } from '../transaction/transaction.service';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts: Account[] = [];

  constructor(private trxService: TransactionService) { }

  getAccountsService(){
    this.trxService.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          return this.accounts;
        } else {
          resp.data.forEach(d => {
            this.accounts.push(d.account);
          });  
          
          return this.accounts;
        }
      }
    );
  }


}
