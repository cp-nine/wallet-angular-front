import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-paymentreport',
  templateUrl: './paymentreport.component.html',
  styleUrls: ['./paymentreport.component.css']
})
export class PaymentreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tb-payment').DataTable();
  }

}
