import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, DoCheck {

  arrUrl = []; 
  currentUrl: string;
  
  breadcrumb : string = 'Home';
  
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];

    switch (this.currentUrl) {
      case "dashboard":
        this.breadcrumb = "dashboard";
        break;
      case "profile":
        this.breadcrumb = "profile";
        break;
      case "activity":
        this.breadcrumb = "activity";
        break;
      case "transaction":
        this.breadcrumb = "transaction";
        break;
        case "payment-report":
        this.breadcrumb = "payment report";
        break;
    
      default:
        break;
    }
  }

}
