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
import { UserInfoTabComponent } from './components/user-info/user-info-tab/user-info-tab.component';
import { VehicleInfoTabComponent } from './components/vehicle-info/vehicle-info-tab/vehicle-info-tab.component';
import { IndentInfoTabComponent } from './components/indent-info/indent-info-tab/indent-info-tab.component';
import { AdminUsersInfoComponent } from './components/admin-info/admin-users-info/admin-users-info.component';
import { AdminsInfoComponent } from './components/admin-info/admins-info/admins-info.component';
import { EntryNewAdminComponent } from './components/admin-info/entry-new-admin/entry-new-admin.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminPageTabComponent,
    AdminInfoComponent,
    AdminInfoTabComponent,
    UserInfoComponent,
    VehicleInfoComponent,
    IndentInfoComponent,
    UserInfoTabComponent,
    VehicleInfoTabComponent,
    IndentInfoTabComponent,
    AdminUsersInfoComponent,
    AdminsInfoComponent,
    EntryNewAdminComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
