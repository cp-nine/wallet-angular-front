import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { mustMatch } from './must-match';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  editPasswordForm: FormGroup;
  submitted:boolean = false;

  message: string = '';

  wallet: Wallet = new Wallet();

  constructor(private fb: FormBuilder, private router: Router, private service: WalletService) { }

  ngOnInit() {
    this.getCustomer();
    this.initForm();
  }

  async getCustomer(){
    let resp = await this.service.getProfile().toPromise();

    if (resp.status !== "20") {
      this.message = resp.message;
    } else {
      this.wallet = resp.data;
    }
  }

  initForm(){
    this.editPasswordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: mustMatch("newPassword", "confirmPassword")
      }
    );
  }

  
  public get f() {
    return this.editPasswordForm.controls;
  }
  

  onSubmit(){

    this.submitted = true;

    if(this.editPasswordForm.errors){
      return;
    }

    if (this.wallet.password !== this.f.currentPassword.value) {
      this.message = "Current Password Not Valid";
    } else {
      let walletId = localStorage.getItem("user");
      let password  = this.f.newPassword.value;
      let data = {"walletId": walletId, "password": password};

      // console.log(data);
      this.updateProcess(data);
    }

    setTimeout(() => {
      this.router.navigate(['/profile']);
    }, 1500);
  }

  updateProcess(data){
    this.service.updatePassword(data).subscribe(
      resp => {
        this.message = resp.message;
      }
    );
  }

  resetMessage(){
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

}
