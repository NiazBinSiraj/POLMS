import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-page-tab',
  templateUrl: './driver-page-tab.component.html',
  styleUrls: ['./driver-page-tab.component.scss']
})
export class DriverPageTabComponent implements OnInit {

  polLedgerEntryIsActive:boolean = true;
  polLedgerEntryHistoryIsActive:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  OnClickVdraEntry(){
    this.polLedgerEntryIsActive = true;
    this.polLedgerEntryHistoryIsActive = false;
  }

  OnClickVdraEntryHistory(){
    this.polLedgerEntryIsActive = false;
    this.polLedgerEntryHistoryIsActive = true;
  }

}
