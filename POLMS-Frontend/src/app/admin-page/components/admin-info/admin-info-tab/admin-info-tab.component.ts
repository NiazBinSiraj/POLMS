import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-info-tab',
  templateUrl: './admin-info-tab.component.html',
  styleUrls: ['./admin-info-tab.component.scss']
})
export class AdminInfoTabComponent implements OnInit {

  adminUsersInfoIsActive:boolean = true;
  adminsInfoIsActive:boolean = false;
  entryNewAdminIsActive:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  OnClickAdminUsersInfo(): void{
    this.adminUsersInfoIsActive = true;
    this.adminsInfoIsActive = false;
    this.entryNewAdminIsActive = false;
  }
  OnClickAdminsInfo(): void{
    this.adminUsersInfoIsActive = false;
    this.adminsInfoIsActive = true;
    this.entryNewAdminIsActive = false;
  }
  OnClickEntryNewAdmin(): void{
    this.adminUsersInfoIsActive = false;
    this.adminsInfoIsActive = false;
    this.entryNewAdminIsActive = true;
  }

}
