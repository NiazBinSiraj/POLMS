import { Driver } from './../../../../models/driver';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';
import { AppState } from 'src/app-state';

@Component({
  selector: 'app-drivers-info',
  templateUrl: './drivers-info.component.html',
  styleUrls: ['./drivers-info.component.scss']
})
export class DriversInfoComponent implements OnInit {

  isClickedToBeDeleted:boolean = false;
  isClickedToBeEdited:boolean = false;
  actionIndex:number = 0;

  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";

  drivers:Driver[] = [];
  updatedDriver:Driver = new Driver();

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.GetAllDrivers();
  }

  async GetAllDrivers() {
    this.drivers = [];
    await this.adminService.GetAllDriverInfo().then((res) => {
      res.result.rows.forEach(async (element: any, i:number) => {
        let driver: Driver = new Driver();
        driver.user_id = element[0];
        driver.rank = element[1];
        driver.first_name = element[2];
        driver.last_name = element[3];
        driver.unit = element[4];
        driver.subunit = element[5];
        driver.contact = element[8];

        driver.personal_no = element[10];
        driver.license_no = element[11];
        driver.license_type = element[12];
        driver.license_issue = element[13];
        driver.license_expire = element[14];

        this.drivers.push(driver);

        if(i == res.result.rows.length - 1)
        {
          this.drivers.sort((a:Driver,b:Driver) => a.user_id - b.user_id);
        }
      });
    });
  }

  OnClickEdit(index:number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Edited.");
    this.updatedDriver = this.drivers[this.actionIndex];
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void{
    console.log(this.actionIndex + "is Canceled Edited.");
    this.isClickedToBeEdited = false;
  }

  async OnClickUpdate(){
    await this.adminService.UpdateDriverInfo(this.updatedDriver).then((res) =>{
      AppState.instance.user_name = this.updatedDriver.first_name + " " + this.updatedDriver.last_name;
      this.updatedDriver = new Driver();
      console.log(res);
      this.GetAllDrivers();
      this.isClickedToBeEdited = false;
    }).catch(console.error);
  }

  OnClickDelete(index: number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Deleted.");
    this.isClickedToBeDeleted = true;
  }

  OnClickYesDelete(): void{
    console.log(this.actionIndex + "is Deleted.");
    this.adminService.DeleteDriver({user_id : this.drivers[this.actionIndex].user_id}).then((res) =>{
      this.GetAllDrivers();
      console.log(res);
      this.isClickedToBeDeleted = false;
    }).catch(console.error);
  }

  OnClickNoDelete(): void{
    console.log(this.actionIndex + "is not Deleted.");
    this.isClickedToBeDeleted = false;
  }

  OnClickShowPassword()
  {
    if(this.passwordIsHidden)
    {
      this.passwordIsHidden = false;
      this.passwordStatus = "Hide"
    }

    else
    {
      this.passwordIsHidden = true;
      this.passwordStatus = "Show"
    }
  }

  OnEditUserID(event:any){
    this.updatedDriver.user_id = event.target.value;
  }
  OnEditPersonalNo(event:any){
    this.updatedDriver.personal_no = event.target.value;
  }
  OnEditRank(event:any){
    this.updatedDriver.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.updatedDriver.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.updatedDriver.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.updatedDriver.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.updatedDriver.subunit = event.target.value;
  }
  OnEditLicenseType(event:any){
    this.updatedDriver.license_type = event.target.value;
  }
  OnEditLicenseNo(event:any){
    this.updatedDriver.license_no = event.target.value;
  }
  OnEditLicenseIssue(event:any){
    this.updatedDriver.license_issue = event.target.value;
  }
  OnEditLicenseExpire(event:any){
    this.updatedDriver.license_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.updatedDriver.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.updatedDriver.password = event.target.value;
  }
}
