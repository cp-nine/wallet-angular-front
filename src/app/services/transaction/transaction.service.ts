import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrxEntity } from 'src/app/models/trx-entity';
import { CommonResponse } from 'src/app/responses/common-response';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WalletAccount } from 'src/app/models/wallet-account';
import { Vtrx } from 'src/app/models/v-trx';
import { AccountList } from 'src/app/models/account-list';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api-v1/trx";
  baseUrl2 = "http://localhost:8080/api-v1/wallet";

  WID = localStorage.getItem("user");

  private _refresh = new Subject<void>();

  public get refresh(){
    return this._refresh;
  } 

  getWalletAccount(): Observable<CommonResponse<WalletAccount[]>>{
      return this.http.get<CommonResponse<WalletAccount[]>>(`${this.baseUrl2}/account/${this.WID}`);
      // return this.http.get<CommonResponse<WalletAccount[]>>(`${this.baseUrl2}/account/${this.WID}`).pipe(tap(() => {return this._refresh.next()}));
  }

  getTransaction(cif: string): Observable<CommonResponse<Vtrx[]>>{
    return this.http.get<CommonResponse<Vtrx[]>>(`${this.baseUrl}/${cif}`);
  }

  getWalletTransaction(cif: string, accountList: AccountList[]): Observable<CommonResponse<Vtrx[]>>{
    return this.http.post<CommonResponse<Vtrx[]>>(`${this.baseUrl}/wallet/${cif}`, accountList);
  }

  // main top up
  topUp(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/topup/${this.WID}`, trx);
  }

  // main top up
  topUpAccount(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/topup`, trx);
  }

  // top up by account
  topUpByAccount(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/topupbac/${this.WID}`, trx);
  }

  // transfer account to account
  transfer(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/transfer`, trx);
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/${this.WID}`, trx);
  }

  // transfer wallet to account
  transferWta(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/trans/walletaccount/${this.WID}`, trx);
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/${this.WID}`, trx);
  }

  // transfer wallet to wallet
  transferWtw(trx: TrxEntity, cashTag: string): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/trans/wallet/${this.WID}/${cashTag}`, trx);
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/${this.WID}`, trx);
  }

  // transfer wallet to wallet
  payment(trx: TrxEntity, cashTag: string): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/payment/wallet/${this.WID}/${cashTag}`, trx);
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/${this.WID}`, trx);
  }

  // cash account
  cashAccount(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash`, trx);
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/${this.WID}`, trx);
  }

  // cash wallet
  cash(trx: TrxEntity): Observable<CommonResponse<TrxEntity>>{
    // return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash`, trx);
    return this.http.post<CommonResponse<TrxEntity>>(`${this.baseUrl}/cash/wallet/${this.WID}`, trx);
  }

}
