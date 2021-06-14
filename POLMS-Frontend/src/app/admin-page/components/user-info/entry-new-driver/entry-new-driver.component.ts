import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-new-driver',
  templateUrl: './entry-new-driver.component.html',
  styleUrls: ['./entry-new-driver.component.scss']
})
export class EntryNewDriverComponent implements OnInit {

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
