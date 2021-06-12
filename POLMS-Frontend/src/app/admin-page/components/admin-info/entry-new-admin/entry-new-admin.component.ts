import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-new-admin',
  templateUrl: './entry-new-admin.component.html',
  styleUrls: ['./entry-new-admin.component.scss']
})
export class EntryNewAdminComponent implements OnInit {

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
