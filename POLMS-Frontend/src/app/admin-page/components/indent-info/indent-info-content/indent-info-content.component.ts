import { Indent } from './../../../../models/indent';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-indent-info-content',
  templateUrl: './indent-info-content.component.html',
  styleUrls: ['./indent-info-content.component.scss']
})
export class IndentInfoContentComponent implements OnInit {

  isClickedToBeDeleted:boolean = false;
  isClickedToBeEdited:boolean = false;
  actionIndex:number = 0;

  indents:Indent[] = [];
  
  constructor() {
    let indent:Indent = new Indent();

    indent.indent_id = 1;
    indent.indent_issue = "Demo";
    indent.indent_expire = "Demo";
    indent.vehicle_type = "Demo";
    indent.no_of_vehicles = 1;

    this.indents.push(indent);
  }

  ngOnInit(): void {
  }

  OnClickEdit(index:number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Edited.");
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void{
    console.log(this.actionIndex + "is Canceled Edited.");
    this.isClickedToBeEdited = false;
  }

  OnClickDelete(index: number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Deleted.");
    this.isClickedToBeDeleted = true;
  }

  OnClickYesDelete(): void{
    console.log(this.actionIndex + "is Deleted.");
    this.isClickedToBeDeleted = false;
  }

  OnClickNoDelete(): void{
    console.log(this.actionIndex + "is not Deleted.");
    this.isClickedToBeDeleted = false;
  }

}
