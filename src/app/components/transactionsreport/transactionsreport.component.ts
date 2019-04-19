import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-transactionsreport',
  templateUrl: './transactionsreport.component.html',
  styleUrls: ['./transactionsreport.component.css']
})
export class TransactionsreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tb-transactions').DataTable();
  }

}
