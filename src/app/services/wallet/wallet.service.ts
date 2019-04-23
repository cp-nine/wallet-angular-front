import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/responses/common-response';
import { Wallet } from 'src/app/models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api-v1/wallet";

  user = localStorage.getItem("user");

  getProfile(): Observable<CommonResponse<Wallet>>{
    return this.http.get<CommonResponse<Wallet>>(`${this.baseUrl}/${this.user}`);
  }
  
}
