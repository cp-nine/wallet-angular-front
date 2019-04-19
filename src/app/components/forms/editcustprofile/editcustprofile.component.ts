import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-editcustprofile',
  templateUrl: './editcustprofile.component.html',
  styleUrls: ['./editcustprofile.component.css']
})
export class EditcustprofileComponent implements OnInit {


  isEdited:boolean = false;
  
  @Output()
  emiterEdit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  back(){
    this.isEdited = !this.isEdited;
    this.emiterEdit.emit(this.isEdited);
  }

}
