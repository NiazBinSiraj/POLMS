import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-new-nco',
  templateUrl: './entry-new-nco.component.html',
  styleUrls: ['./entry-new-nco.component.scss']
})
export class EntryNewNcoComponent implements OnInit {

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
