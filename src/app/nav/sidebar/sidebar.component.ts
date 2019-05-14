import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { MENUDUA } from 'src/app/models/menu-dua';
import { MENUSATU } from 'src/app/models/menu-satu';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  wallet: Wallet = new Wallet();

  @Input()
  isEdit:boolean = false;

  message: string;

  totalBallance: number = 0;

  mainMenu;

  constructor(
    private service: WalletService,
    private service2: TransactionService
  ) { }

  async getProfile(){
    let response = await this.service.getProfile().toPromise();
    if (response.status !== "20") {
      this.message = response.message;
    } else {
      this.wallet = response.data; 

      if (response.data.type === "E-Merchant") {
        this.mainMenu = MENUDUA;
      } else {
        this.mainMenu = MENUSATU;
      }
    }
  }

  get actibeBallance(){
    return this.wallet.activeBallance;
  }

  refresh(){
    this.service.refresh.subscribe(
      () => {
        this.getProfile();
      }
    );
  }

  refresh2(){
    this.service2.refresh.subscribe(
      () => {
        this.accountNumber();
      }
    );
  }

  accountNumber(){
    this.service2.getWalletAccount().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          resp.data.forEach(wa => {
            this.totalBallance = this.totalBallance + wa.account.ballance;
          });
        }
      }
    );
  }

  ngOnInit() {

    this.refresh();
    this.refresh2();

    // this.getProfile();
    // this.accountNumber();
    // --- togle sidebar -------
    $('#btn-toggler').on('click', function () {
      if($(this).hasClass('btnhide')){
          $('#btn-toggler').removeClass('btnhide');
          $('#btn-toggler').addClass('btnshow');
          $('.sidebar').css('left','-215px');
          $('.sidebar').css('transition','0.3s');
          $('.content').css('transition','0.3s');
          $('.content').css('margin-left', '0');
      }else{
          $('#btn-toggler').addClass('btnhide');
          $('#btn-toggler').removeClass('btnshow');
          $('.sidebar').css('left','0');
          $('.sidebar').css('transition','0.3s');
          $('.content').css('transition','0.3s');
          $('.content').css('margin-left', '215px');
      }
  });
  }

  // ngDoCheck(){
  //   this.refresh2();
  // }

}
