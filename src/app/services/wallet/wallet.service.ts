import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CommonResponse } from 'src/app/responses/common-response';
import { Wallet } from 'src/app/models/wallet';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api-v1/wallet";

  user = localStorage.getItem("user");

  private _refresh = new Subject<void>();

  public get refresh(){
    return this._refresh;
  } 

  getProfile(): Observable<CommonResponse<Wallet>>{
    return this.http.get<CommonResponse<Wallet>>(`${this.baseUrl}/${this.user}`).pipe(
      tap(() => {this._refresh.next();})
    );
  }

  updatePassword(data): Observable<CommonResponse<Wallet>>{
    return this.http.put<CommonResponse<Wallet>>(`${this.baseUrl}/update-password`, data);
  }
  
}
