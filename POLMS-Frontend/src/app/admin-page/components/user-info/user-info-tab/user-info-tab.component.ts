import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-tab',
  templateUrl: './user-info-tab.component.html',
  styleUrls: ['./user-info-tab.component.scss']
})
export class UserInfoTabComponent implements OnInit {

  ncosInfoIsActive:boolean = true;
  driversInfoIsActive:boolean = false;
  entryNewNcoIsActive:boolean = false;
  entryNewDriverIsActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickNcosInfo(): void{
    this.ncosInfoIsActive = true;
    this.driversInfoIsActive = false;
    this.entryNewNcoIsActive = false;
    this.entryNewDriverIsActive = false;
  }

  OnClickDriversInfo(): void{
    this.ncosInfoIsActive = false;
    this.driversInfoIsActive = true;
    this.entryNewNcoIsActive = false;
    this.entryNewDriverIsActive = false;
  }

  OnClickEntryNewNco(): void{
    this.ncosInfoIsActive = false;
    this.driversInfoIsActive = false;
    this.entryNewNcoIsActive = true;
    this.entryNewDriverIsActive = false;
  }

  OnClickEntryNewDriver(): void{
    this.ncosInfoIsActive = false;
    this.driversInfoIsActive = false;
    this.entryNewNcoIsActive = false;
    this.entryNewDriverIsActive = true;
  }

}
