import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WalletLogin } from 'src/app/models/wallet-login';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/responses/common-response';
import { Wallet } from 'src/app/models/wallet';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/api-v1/wallet/login";

  login(user: WalletLogin): Observable<CommonResponse<Wallet>>{
    return this.http.post<CommonResponse<Wallet>>(`${this.baseUrl}`, user);
  }

  isLogin(): boolean{
    if (localStorage.getItem("user") !== null) {
      return false;
    } else {
      return true;
    }
  }
}
