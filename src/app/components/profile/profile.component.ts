import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editPage(){
    this.isEdit = !this.isEdit;
  }

}
