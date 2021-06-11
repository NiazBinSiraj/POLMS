import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page-tab',
  templateUrl: './admin-page-tab.component.html',
  styleUrls: ['./admin-page-tab.component.scss']
})
export class AdminPageTabComponent implements OnInit {

  adminInfoIsActive:boolean = true;
  userInfoIsActive:boolean = false;
  vehicleInfoIsActive:boolean = false;
  indentInfoIsActive:boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  OnClickAdminInfo():void{
    this.adminInfoIsActive = true;
    this.userInfoIsActive = false;
    this.vehicleInfoIsActive = false;
    this.indentInfoIsActive = false;
  }

  OnClickUserInfo():void{
    this.adminInfoIsActive = false;
    this.userInfoIsActive = true;
    this.vehicleInfoIsActive = false;
    this.indentInfoIsActive = false;
  }

  OnClickVehicleInfo():void{
    this.adminInfoIsActive = false;
    this.userInfoIsActive = false;
    this.vehicleInfoIsActive = true;
    this.indentInfoIsActive = false;
  }

  OnClickIndentInfo():void{
    this.adminInfoIsActive = false;
    this.userInfoIsActive = false;
    this.vehicleInfoIsActive = false;
    this.indentInfoIsActive = true;
  }

}
