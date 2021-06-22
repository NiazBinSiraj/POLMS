import { DriverPageComponent } from './driver-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverPageRoutingModule } from './driver-page-routing.module';
import { DriverPageTabComponent } from './driver-page-tab/driver-page-tab.component';
import { VDRAEntryComponent } from './vdra-entry/vdra-entry.component';
import { VDRAEntryHistoryComponent } from './vdra-entry-history/vdra-entry-history.component';


@NgModule({
  declarations: [
    DriverPageComponent,
    DriverPageTabComponent,
    VDRAEntryComponent,
    VDRAEntryHistoryComponent
  ],
  imports: [
    CommonModule,
    DriverPageRoutingModule
  ]
})
export class DriverPageModule { }
