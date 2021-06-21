import { Driver } from './../../../../models/driver';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';

@Component({
  selector: 'app-entry-new-driver',
  templateUrl: './entry-new-driver.component.html',
  styleUrls: ['./entry-new-driver.component.scss']
})
export class EntryNewDriverComponent implements OnInit {

  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";
  
  newdriver:Driver = new Driver();

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
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

  async OnClickSubmit()
  {
    this.newdriver.user_type = "Driver";
    await this.adminService.CreateNewDriver(this.newdriver).then((res) => {
      if(res.status == 201)
      {
        console.log("driver inserted");
      }
    }).catch(console.error);
    
  }

  OnEditUserID(event:any){
    this.newdriver.user_id = event.target.value;
  }
  OnEditPersonalNo(event:any){
    this.newdriver.personal_no = event.target.value;
  }
  OnEditRank(event:any){
    this.newdriver.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.newdriver.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.newdriver.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.newdriver.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.newdriver.subunit = event.target.value;
  }
  OnEditLicenseType(event:any){
    this.newdriver.license_type = event.target.value;
  }
  OnEditLicenseNo(event:any){
    this.newdriver.license_no = event.target.value;
  }
  OnEditLicenseIssue(event:any){
    this.newdriver.license_issue = event.target.value;
  }
  OnEditLicenseExpire(event:any){
    this.newdriver.license_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.newdriver.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.newdriver.password = event.target.value;
  }

}
