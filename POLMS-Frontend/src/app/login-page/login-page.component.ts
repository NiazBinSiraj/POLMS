import { AppState } from 'src/app-state';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  credential = {
    id : 0,
    password : ""
  };
  
  constructor(private authService:AuthServiceService, private router:Router) { }

  ngOnInit(): void {

  }

  OnEditUserIdInputField(event:any)
  {
    this.credential.id = event.target.value;
  }

  OnEditPasswordInputField(event:any)
  {
    this.credential.password = event.target.value;
  }

  async OnClickLogin()
  {
    await this.authService.Login(this.credential).then((res) => {
      if(res.status == 200)
      {
        AppState.instance.isLoggedIn = true;
        AppState.instance.user_id = this.credential.id;
        AppState.instance.user_type = res.user_type;
        AppState.instance.user_name = res.user_name;

        if(res.user_type == 'Officer') this.router.navigate(['admin']);
        else if(res.user_type == 'NCO') this.router.navigate(['nco']);
        else if(res.user_type == 'Driver') this.router.navigate(['driver']);
      }
    }).catch(console.error);
  }

}
