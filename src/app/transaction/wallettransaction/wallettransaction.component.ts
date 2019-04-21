import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallettransaction',
  templateUrl: './wallettransaction.component.html',
  styleUrls: ['./wallettransaction.component.css']
})
export class WallettransactionComponent implements OnInit {

  topupPage:boolean=false;
  transferPage:boolean=false;
  withdrawalPage:boolean=false;
  paymentPage:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  topup(){
    this.paymentPage = false;
    this.withdrawalPage = false;
    this.transferPage = false;

    this.topupPage = !this.topupPage;
    // this.router.navigate([{ outlets: { content: ['top-up'] }}],{ relativeTo: this.route }); 
    // this.router.navigateByUrl("/transaction/top-up",{skipLocationChange:true}); 
  }

  transfer(){
    this.paymentPage = false;
    this.withdrawalPage = false;
    this.topupPage = false;

    this.transferPage = !this.transferPage;
  }

  withdrawal(){
    this.paymentPage = false;
    this.transferPage = false;
    this.topupPage = false;

    this.withdrawalPage = !this.withdrawalPage;
  }

  payment(){
    this.withdrawalPage = false;
    this.topupPage = false;
    this.transferPage = false;
    this.topupPage = false;
    
    this.paymentPage = !this.paymentPage;
  }

}
