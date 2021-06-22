import { AppState } from 'src/app-state';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'POLMS-Frontend';

  constructor(private router: Router){}

  ngOnInit()
  {
    if(AppState.instance.isLoggedIn){
      if(AppState.instance.user_type == "Officer")this.router.navigate(['admin']);
      if(AppState.instance.user_type == "NCO")this.router.navigate(['nco']);
      if(AppState.instance.user_type == "Driver")this.router.navigate(['driver']);
    }
    else{
      this.router.navigate(['login']);
    }
  }
}
