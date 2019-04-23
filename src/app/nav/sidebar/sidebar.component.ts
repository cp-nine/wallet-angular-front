import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Wallet } from 'src/app/models/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { MENUDUA } from 'src/app/models/menu-dua';
import { MENUSATU } from 'src/app/models/menu-satu';

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

  mainMenu;

  constructor(
    private service: WalletService
  ) { }

  getProfile(){
    this.service.getProfile().subscribe(
      response => {
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
    );
  }

  get actibeBallance(){
    return this.wallet.activeBallance;
  }

  ngOnInit() {
    this.getProfile();
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

}
