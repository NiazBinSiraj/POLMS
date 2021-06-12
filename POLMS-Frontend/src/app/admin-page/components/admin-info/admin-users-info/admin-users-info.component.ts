import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users-info',
  templateUrl: './admin-users-info.component.html',
  styleUrls: ['./admin-users-info.component.scss']
})
export class AdminUsersInfoComponent implements OnInit {

  passwordIsHidden:boolean = true;
  passwordStatus:string = "Show";
  
  constructor() { }

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

}
