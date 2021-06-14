import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

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

  admins:Admin[] = [];

  constructor() {
    let data:Admin = new Admin();
    data.userId = "112";
    data.baNo = "12218";
    data.contact = "Dhaka";
    data.coroAppt = "Demo";
    data.coroDate = "12 June 2021";
    data.coroExpire = "12 July 2021";
    data.coroNo = "12345";
    data.firstName = "Abul";
    data.lastName = "Hasan";
    data.rank = "COL";
    data.unit = "Demo";
    data.subunit = "Demo";
    this.admins.push(data);

    data = new Admin();
    data.userId = "112";
    data.baNo = "12218";
    data.contact = "Dhaka";
    data.coroAppt = "Demo";
    data.coroDate = "12 June 2021";
    data.coroExpire = "12 July 2021";
    data.coroNo = "12345";
    data.firstName = "Rashed";
    data.lastName = "Uddin";
    data.rank = "COL";
    data.unit = "Demo";
    data.subunit = "Demo";
    this.admins.push(data);

    data = new Admin();
    data.userId = "112";
    data.baNo = "12218";
    data.contact = "Dhaka";
    data.coroAppt = "Demo";
    data.coroDate = "12 June 2021";
    data.coroExpire = "12 July 2021";
    data.coroNo = "12345";
    data.firstName = "Abdul";
    data.lastName = "Mozid";
    data.rank = "COL";
    data.unit = "Demo";
    data.subunit = "Demo";
    this.admins.push(data);

    data = new Admin();
    data.userId = "112";
    data.baNo = "12218";
    data.contact = "Dhaka";
    data.coroAppt = "Demo";
    data.coroDate = "12 June 2021";
    data.coroExpire = "12 July 2021";
    data.coroNo = "12345";
    data.firstName = "Rahat";
    data.lastName = "Rahman";
    data.rank = "COL";
    data.unit = "Demo";
    data.subunit = "Demo";
    this.admins.push(data);

    data = new Admin();
    data.userId = "112";
    data.baNo = "12218";
    data.contact = "Dhaka";
    data.coroAppt = "Demo";
    data.coroDate = "12 June 2021";
    data.coroExpire = "12 July 2021";
    data.coroNo = "12345";
    data.firstName = "Rakib";
    data.lastName = "Hasan";
    data.rank = "COL";
    data.unit = "Demo";
    data.subunit = "Demo";
    this.admins.push(data);
  }

  ngOnInit(): void {
  }

  OnClickEdit(index:number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Edited.");
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void{
    console.log(this.actionIndex + "is Canceled Edited.");
    this.isClickedToBeEdited = false;
  }

  OnClickDelete(index: number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Deleted.");
    this.isClickedToBeDeleted = true;
  }

  OnClickYesDelete(): void{
    console.log(this.actionIndex + "is Deleted.");
    this.isClickedToBeDeleted = false;
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

}
