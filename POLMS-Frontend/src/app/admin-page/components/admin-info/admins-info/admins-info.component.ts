import { AppState } from './../../../../../app-state';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';
import { Admin } from './../../../../models/admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins-info',
  templateUrl: './admins-info.component.html',
  styleUrls: ['./admins-info.component.scss'],
})
export class AdminsInfoComponent implements OnInit {
  isClickedToBeDeleted: boolean = false;
  isClickedToBeEdited: boolean = false;
  actionIndex: number = 0;

  passwordIsHidden: boolean = true;
  passwordStatus: string = 'Show';

  admins: Admin[] = [];
  updatedAdmin: Admin = new Admin();

  constructor(private adminService: AdminServiceService) {}

  ngOnInit() {
    this.GetAllAdmins();
  }

  async GetAllAdmins() {
    this.admins = [];
    await this.adminService.GetAllAdminsInfo().then((res) => {
      res.result.rows.forEach(async (element: any, i:number) => {
        let admin: Admin = new Admin();
        admin.user_id = element[0];
        admin.rank = element[1];
        admin.first_name = element[2];
        admin.last_name = element[3];
        admin.unit = element[4];
        admin.subunit = element[5];
        admin.contact = element[8];

        admin.ba_no = element[10];
        admin.coro_appointment = element[11];
        admin.coro_no = element[12];
        admin.coro_date = element[13];
        admin.coro_expire = element[14];

        this.admins.push(admin);

        if(i == res.result.rows.length - 1)
        {
          this.admins.sort((a:Admin,b:Admin) => a.user_id - b.user_id);
        }
      });
    });
  }

  OnClickEdit(index: number): void {
    this.actionIndex = index;
    console.log(this.actionIndex + 'is clicked to be Edited.');
    this.updatedAdmin = this.admins[this.actionIndex];
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void {
    console.log(this.actionIndex + 'is Canceled Edited.');
    this.isClickedToBeEdited = false;
  }

  async OnClickUpdate(){
    await this.adminService.UpdateAdminInfo(this.updatedAdmin).then((res) =>{
      if(this.admins[this.actionIndex].user_id == AppState.instance.user_id) AppState.instance.user_name = this.updatedAdmin.first_name + " " + this.updatedAdmin.last_name;
      this.updatedAdmin = new Admin();
      console.log(res);
      this.GetAllAdmins();
      this.isClickedToBeEdited = false;
    }).catch(console.error);
  }

  OnClickDelete(index: number): void {
    this.actionIndex = index;
    console.log(this.actionIndex + 'is clicked to be Deleted.');
    this.isClickedToBeDeleted = true;
  }

  OnClickYesDelete(): void {
    console.log(this.actionIndex + 'is Deleted.');
    this.adminService.DeleteAdmin({user_id : this.admins[this.actionIndex].user_id}).then((res) =>{
      this.GetAllAdmins();
      console.log(res);
      this.isClickedToBeDeleted = false;
    }).catch(console.error);
  }

  OnClickNoDelete(): void {
    console.log(this.actionIndex + 'is not Deleted.');
    this.isClickedToBeDeleted = false;
  }

  OnClickShowPassword() {
    if (this.passwordIsHidden) {
      this.passwordIsHidden = false;
      this.passwordStatus = 'Hide';
    } else {
      this.passwordIsHidden = true;
      this.passwordStatus = 'Show';
    }
  }

  OnEditUserID(event:any){
    this.updatedAdmin.user_id = event.target.value;
  }
  OnEditBaNo(event:any){
    this.updatedAdmin.ba_no = event.target.value;
    console.log(this.updatedAdmin);
  }
  OnEditRank(event:any){
    this.updatedAdmin.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.updatedAdmin.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.updatedAdmin.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.updatedAdmin.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.updatedAdmin.subunit = event.target.value;
  }
  OnEditAppointment(event:any){
    this.updatedAdmin.coro_appointment = event.target.value;
  }
  OnEditCoroNo(event:any){
    this.updatedAdmin.coro_no = event.target.value;
  }
  OnEditCoroDate(event:any){
    this.updatedAdmin.coro_date = event.target.value;
  }
  OnEditCoroExpire(event:any){
    this.updatedAdmin.coro_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.updatedAdmin.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.updatedAdmin.password = event.target.value;
  }
}
