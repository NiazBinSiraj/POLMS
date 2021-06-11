import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { AdminPageTabComponent } from './components/admin-page-tab/admin-page-tab.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminInfoTabComponent } from './components/admin-info/admin-info-tab/admin-info-tab.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { IndentInfoComponent } from './components/indent-info/indent-info.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminPageTabComponent,
    AdminInfoComponent,
    AdminInfoTabComponent,
    UserInfoComponent,
    VehicleInfoComponent,
    IndentInfoComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
