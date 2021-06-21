import { NCO } from './../../../../models/nco';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';

@Component({
  selector: 'app-entry-new-nco',
  templateUrl: './entry-new-nco.component.html',
  styleUrls: ['./entry-new-nco.component.scss']
})
export class EntryNewNcoComponent implements OnInit {

  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";
  
  newnco:NCO = new NCO();

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
    this.newnco.user_type = "NCO";
    await this.adminService.CreateNewNCO(this.newnco).then((res) => {
      if(res.status == 201)
      {
        console.log("nco inserted");
      }
    }).catch(console.error);
    
  }

  OnEditUserID(event:any){
    this.newnco.user_id = event.target.value;
  }
  OnEditPersonalNo(event:any){
    this.newnco.personal_no = event.target.value;
  }
  OnEditRank(event:any){
    this.newnco.rank = event.target.value;
  }
  OnEditFirstName(event:any){
    this.newnco.first_name = event.target.value;
  }
  OnEditLastName(event:any){
    this.newnco.last_name = event.target.value;
  }
  OnEditUnit(event:any){
    this.newnco.unit = event.target.value;
  }
  OnEditSubunit(event:any){
    this.newnco.subunit = event.target.value;
  }
  OnEditAppointment(event:any){
    this.newnco.nco_appointment = event.target.value;
  }
  OnEditOrderNo(event:any){
    this.newnco.order_no = event.target.value;
  }
  OnEditOrderDate(event:any){
    this.newnco.order_date = event.target.value;
  }
  OnEditOrderExpire(event:any){
    this.newnco.order_expire = event.target.value;
  }
  OnEditContact(event:any){
    this.newnco.contact = event.target.value;
  }
  OnEditPassword(event:any){
    this.newnco.password = event.target.value;
  }

}
