import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './root-components/nav-bar/nav-bar.component';

import { AdminPageModule } from './admin-page/admin-page.module';
import { NcoPageModule } from './nco-page/nco-page.module';
import { DriverPageModule } from './driver-page/driver-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPageModule,
    NcoPageModule,
    DriverPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
