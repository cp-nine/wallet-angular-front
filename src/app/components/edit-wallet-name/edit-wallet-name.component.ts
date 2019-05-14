import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Wallet } from 'src/app/models/wallet';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { mustMatch } from '../forms/update-password/must-match';

@Component({
  selector: 'app-edit-wallet-name',
  templateUrl: './edit-wallet-name.component.html',
  styleUrls: ['./edit-wallet-name.component.css']
})
export class EditWalletNameComponent implements OnInit {

  editWalletForm: FormGroup;
  submitted:boolean = false;

  @Output()
  emmiter = new EventEmitter();

  message: string = '';

  // @Input()
  wallet: Wallet = new Wallet();

  constructor(private fb: FormBuilder, private router: Router, private service: WalletService) { }

  ngOnInit() {
    this.initForm();
    this.getCustomer();
  }

  async getCustomer(){
    let resp = await this.service.getProfile().toPromise();

    if (resp.status !== "20") {
      this.message = resp.message;
    } else {
      this.wallet = resp.data;
    }

    this.editWalletForm.setValue(
      {
        walletName: this.wallet.walletName
      }
    );
  }

  initForm(){
    this.editWalletForm = this.fb.group(
      {
        walletName: ['', Validators.required]
      }
    );
  }

  
  public get f() {
    return this.editWalletForm.controls;
  }
  

  onSubmit(){

    this.submitted = true;

    if(this.editWalletForm.errors){
      return;
    }

    let newWalletName = this.editWalletForm.controls.walletName.value;
    let data = {"walletId": localStorage.getItem("user"), "walletName": newWalletName};

      // console.log(data);
    this.updateProcess(data);
  }

  updateProcess(data){
    this.service.updateWalletName(data).subscribe(
      resp => {
        this.emmiter.emit();
        alert(resp.message);
      }
    );
  }


}
