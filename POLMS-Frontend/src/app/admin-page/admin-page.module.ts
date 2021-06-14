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
import { NcosInfoComponent } from './components/user-info/ncos-info/ncos-info.component';
import { DriversInfoComponent } from './components/user-info/drivers-info/drivers-info.component';
import { EntryNewNcoComponent } from './components/user-info/entry-new-nco/entry-new-nco.component';
import { EntryNewDriverComponent } from './components/user-info/entry-new-driver/entry-new-driver.component';
import { EntryNewVehicleComponent } from './components/vehicle-info/entry-new-vehicle/entry-new-vehicle.component';
import { EntryNewIndentComponent } from './components/indent-info/entry-new-indent/entry-new-indent.component';
import { IndentInfoContentComponent } from './components/indent-info/indent-info-content/indent-info-content.component';
import { VehicleInfoContentComponent } from './components/vehicle-info/vehicle-info-content/vehicle-info-content.component';

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
    EntryNewAdminComponent,
    NcosInfoComponent,
    DriversInfoComponent,
    EntryNewNcoComponent,
    EntryNewDriverComponent,
    EntryNewVehicleComponent,
    EntryNewIndentComponent,
    IndentInfoContentComponent,
    VehicleInfoContentComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
