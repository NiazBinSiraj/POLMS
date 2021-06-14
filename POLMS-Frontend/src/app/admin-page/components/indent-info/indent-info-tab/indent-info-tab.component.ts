import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indent-info-tab',
  templateUrl: './indent-info-tab.component.html',
  styleUrls: ['./indent-info-tab.component.scss']
})
export class IndentInfoTabComponent implements OnInit {

  indentInfoIsActive:boolean = true;
  entryNewIntendIsActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickIndentInfo(): void{
    this.indentInfoIsActive = true;
    this.entryNewIntendIsActive = false;
  }

  OnClickEntryNewIndent(): void{
    this.indentInfoIsActive = false;
    this.entryNewIntendIsActive = true;
  }

}
