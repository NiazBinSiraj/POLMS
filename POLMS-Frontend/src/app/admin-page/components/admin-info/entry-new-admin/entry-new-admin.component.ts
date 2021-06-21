import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-entry-new-admin',
  templateUrl: './entry-new-admin.component.html',
  styleUrls: ['./entry-new-admin.component.scss']
})
export class EntryNewAdminComponent implements OnInit {

  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";

  newadmin:Admin = new Admin();
  
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
  }

  OnClickShowPassword()
  {
    if(this.passwordIsHidden)
    {
      this.passwordIsHidden = false;
      this.passwordStatus = "Hide";
    }

    else
    {
      this.passwordIsHidden = true;
      this.passwordStatus = "Show";
    }
  }

  async OnClickSubmit()
  {
    this.newadmin.user_type = "Officer";
    await this.adminService.CreateNewAdmin(this.newadmin).then((res) => {
      if(res.status == 201)
      {
        console.log("admin inserted");
      }
    }).catch(console.error);
    
  }

  OnEditUserID(event:any){
    this.newadmin.user_id = event.target.value;
  }
  OnEditBaNo(event:any){
    this.newadmin.ba_no = event.target.value;
  }
  OnEditRank(event:any){
    this.newadmin.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.newadmin.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.newadmin.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.newadmin.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.newadmin.subunit = event.target.value;
  }
  OnEditAppointment(event:any){
    this.newadmin.coro_appointment = event.target.value;
  }
  OnEditCoroNo(event:any){
    this.newadmin.coro_no = event.target.value;
  }
  OnEditCoroDate(event:any){
    this.newadmin.coro_date = event.target.value;
  }
  OnEditCoroExpire(event:any){
    this.newadmin.coro_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.newadmin.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.newadmin.password = event.target.value;
  }

}
