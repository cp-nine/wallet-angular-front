import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('myChart');
    var data = {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(48, 219, 162)",
          "rgb(49, 158, 247)",
          "rgb(229, 71, 71)"
        ],
      }],
      labels: [
        'Top Up',
        'Transfer',
        'Withdrawal'
      ]
    };
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true
      }
    });
  }

}
