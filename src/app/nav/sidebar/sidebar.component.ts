import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "fa-tachometer-alt"
    },
    {
      name: "Actifity",
      link: "/activity",
      icon: "fa-chart-line"
    },
    {
      name: "Transaction",
      link: "/transaction",
      icon: "fa-wallet"
    },
    {
      name: "Payment Report",
      link: "/payment-report",
      icon: "fa-money-bill-alt"
    }
    
  ];

  constructor() { }

  ngOnInit() {
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
