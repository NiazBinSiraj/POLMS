import { Admin } from 'src/app/models/admin';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';

@Component({
  selector: 'app-admin-users-info',
  templateUrl: './admin-users-info.component.html',
  styleUrls: ['./admin-users-info.component.scss']
})
export class AdminUsersInfoComponent implements OnInit {

  isClickedToChangePassword:boolean = false;
  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";
  admin:Admin = new Admin();

  constructor(private adminService:AdminServiceService) {
    this.admin.user_id = 1;
    this.admin.rank = 'Demo';
    this.admin.first_name = 'Demo';
    this.admin.last_name = 'Demo';
    this.admin.unit = 'Demo';
    this.admin.subunit = 'Demo';
    this.admin.password = 'Demo';
    this.admin.user_type = 'Demo';
    this.admin.contact = 'Demo';
    this.admin.ba_no = 'Demo';
    this.admin.coro_appointment = 'Demo';
    this.admin.coro_no = 'Demo';
    this.admin.coro_date = 'Demo';
    this.admin.coro_expire = 'Demo';
  }

  ngOnInit(): void {
    this.GetAdminUsersInfo();
  }

  async GetAdminUsersInfo(){
    await this.adminService.GetAdminUsersInfo().then((res) =>{
      this.admin = res.data[0];
      console.log(this.admin);
    }).catch(console.error);
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

  OnClickChangePassword()
  {
    this.isClickedToChangePassword = true;
  }

  async OnClickYes()
  {
    this.isClickedToChangePassword = false;
    await this.adminService.ChangeAdminPassword({password: this.admin.password}).then((res) =>{
      console.log(res);
    });
  }

  OnClickNo()
  {
    this.isClickedToChangePassword = false;
  }

  OnClickCancel(): void {
    this.isClickedToChangePassword = false;
  }

  OnEditPassword(event:any){
    this.admin.password = event.target.value;
  }

}
