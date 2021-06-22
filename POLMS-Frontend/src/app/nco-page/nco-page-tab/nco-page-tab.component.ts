import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nco-page-tab',
  templateUrl: './nco-page-tab.component.html',
  styleUrls: ['./nco-page-tab.component.scss']
})
export class NcoPageTabComponent implements OnInit {

  polLedgerEntryIsActive:boolean = true;
  polLedgerEntryHistoryIsActive:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  OnClickPolLedgerEntry(){
    this.polLedgerEntryIsActive = true;
    this.polLedgerEntryHistoryIsActive = false;
  }

  OnClickPolLedgerEntryHistory(){
    this.polLedgerEntryIsActive = false;
    this.polLedgerEntryHistoryIsActive = true;
  }

}
