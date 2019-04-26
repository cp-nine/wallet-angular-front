import { Injectable, OnInit } from '@angular/core';
import { TransactionService } from '../transaction/transaction.service';
import { Account } from 'src/app/models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/responses/common-response';
import { MockWalletAcoount } from 'src/app/models/mock-wallet-account';
import { WalletAccount } from 'src/app/models/wallet-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService{

  accounts: Account[] = [];

  constructor(private trxService: TransactionService, private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api-v1";

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

  addAccount(acn: number, cif:  string): Observable<CommonResponse<WalletAccount>>{
    let data: MockWalletAcoount = new MockWalletAcoount(localStorage.getItem("user"), acn);
    return this.http.post<CommonResponse<WalletAccount>>(`${this.baseUrl}/wallet/account/${cif}`,data);
  }


}
