import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    this.activityChart();
    // this.paymentChart();

  }

  activityChart(){
    var ctx = document.getElementById('myChart');
    var data = {
      datasets: [{
        data: [2, 3, 2, 5],
        backgroundColor: [
          "rgb(48, 219, 162)",
          "rgb(49, 158, 247)",
          "rgb(229, 71, 71)",
          "rgb(245, 255, 61)"
        ],
      }],
      labels: [
        'Top Up',
        'Transfer',
        'Withdrawal',
        'Payment'
      ]
    };
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true
      }
    });
  }

  

  // paymentChart(){
  //   var ctx = document.getElementById('paymentChart');
  //   var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// 	var config = {
  //     type: 'line',
	// 		data: {
	// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	// 			datasets: [{
	// 				label: 'Payment Duration',
	// 				backgroundColor: 'rgb(49, 158, 247)',
	// 				borderColor: 'rgb(49, 158, 247)',
	// 				data: [50, 80, 70, 80, 85, 81, 100],
	// 				fill: false,
	// 			}]
	// 		},
	// 		options: {
	// 			responsive: true,
	// 			tooltips: {
	// 				mode: 'index',
	// 				intersect: false,
	// 			},
	// 			hover: {
	// 				mode: 'nearest',
	// 				intersect: true
	// 			},
	// 			scales: {
	// 				xAxes: [{
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Month'
	// 					}
	// 				}],
	// 				yAxes: [{
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Value'
	// 					}
	// 				}]
	// 			}
	// 		}
  //   };
    
  //   new Chart(ctx, config);
  // }

}
