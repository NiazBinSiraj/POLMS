import { NCO } from './../../../../models/nco';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';
import { AppState } from 'src/app-state';

@Component({
  selector: 'app-ncos-info',
  templateUrl: './ncos-info.component.html',
  styleUrls: ['./ncos-info.component.scss'],
})
export class NcosInfoComponent implements OnInit {
  isClickedToBeDeleted: boolean = false;
  isClickedToBeEdited: boolean = false;
  actionIndex: number = 0;

  passwordIsHidden: boolean = true;
  passwordStatus: string = 'Show';

  ncos: NCO[] = [];
  updatedNco:NCO = new NCO();

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.GetAllNCOs();
  }

  async GetAllNCOs() {
    this.ncos = [];
    await this.adminService.GetAllNCOInfo().then((res) => {
      res.result.rows.forEach(async (element: any, i:number) => {
        let nco: NCO = new NCO();
        nco.user_id = element[0];
        nco.rank = element[1];
        nco.first_name = element[2];
        nco.last_name = element[3];
        nco.unit = element[4];
        nco.subunit = element[5];
        nco.contact = element[8];

        nco.personal_no = element[10];
        nco.nco_appointment = element[11];
        nco.order_no = element[12];
        nco.order_date = element[13];
        nco.order_expire = element[14];

        this.ncos.push(nco);

        if(i == res.result.rows.length - 1)
        {
          this.ncos.sort((a:NCO,b:NCO) => a.user_id - b.user_id);
        }
      });
    });
  }

  OnClickEdit(index: number): void {
    this.actionIndex = index;
    console.log(this.actionIndex + 'is clicked to be Edited.');
    this.updatedNco = this.ncos[this.actionIndex];
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void {
    console.log(this.actionIndex + 'is Canceled Edited.');
    this.isClickedToBeEdited = false;
  }

  async OnClickUpdate(){
    await this.adminService.UpdateNCOInfo(this.updatedNco).then((res) =>{
      if(this.ncos[this.actionIndex].user_id == AppState.instance.user_id) AppState.instance.user_name = this.updatedNco.first_name + " " + this.updatedNco.last_name;
      this.updatedNco = new NCO();
      console.log(res);
      this.GetAllNCOs();
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
    this.adminService.DeleteNCO({user_id : this.ncos[this.actionIndex].user_id}).then((res) =>{
      this.GetAllNCOs();
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
    this.updatedNco.user_id = event.target.value;
  }
  OnEditPersonalNo(event:any){
    this.updatedNco.personal_no = event.target.value;
  }
  OnEditRank(event:any){
    this.updatedNco.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.updatedNco.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.updatedNco.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.updatedNco.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.updatedNco.subunit = event.target.value;
  }
  OnEditAppointment(event:any){
    this.updatedNco.nco_appointment = event.target.value;
  }
  OnEditOrderNo(event:any){
    this.updatedNco.order_no = event.target.value;
  }
  OnEditOrderDate(event:any){
    this.updatedNco.order_date = event.target.value;
  }
  OnEditOrderExpire(event:any){
    this.updatedNco.order_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.updatedNco.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.updatedNco.password = event.target.value;
  }
}
