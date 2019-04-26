import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { WalletLogin } from 'src/app/models/wallet-login';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: WalletLogin = new WalletLogin();
  loginForm: FormGroup;
  submitted: boolean = false;
  loginFailed: boolean = false;

  message: string;

  constructor(
    private service: LoginService,
    private fb: FormBuilder
  ){ }

  ngOnInit() {   
    this.loginForm = this.fb.group({
      cashTag: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get f() {
    return this.loginForm.controls;
  }

  // login process
  loginProcess(){
    this.submitted = true;
    this.user = this.loginForm.value;

    // check validation form
    if (this.loginForm.invalid) {
      return;
    }

    // call login auth service to hit api login
    this.service.login(this.user).subscribe(
      response => {
        if(response.status !== "20"){
          this.loginFailed = true;
        } else {
          localStorage.setItem("user", `${response.data.walletId}`);
          window.location.href = "/dashboard";
        }
      }
    );
    
  }

}
