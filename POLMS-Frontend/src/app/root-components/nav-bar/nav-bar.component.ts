import { Router } from '@angular/router';
import { AppState } from 'src/app-state';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, DoCheck {
  isLoggedIn:boolean = false;
  username:string = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    this.isLoggedIn = AppState.instance.isLoggedIn;
    this.username = AppState.instance.user_name;
  }

  OnClickSignOut(){
    AppState.instance.isLoggedIn = false;
    AppState.instance.user_id = 0;
    AppState.instance.user_name = "";
    AppState.instance.user_type = "";

    this.router.navigate(['login']);
  }

}
