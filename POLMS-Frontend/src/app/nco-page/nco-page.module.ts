import { NcoPageComponent } from './nco-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcoPageRoutingModule } from './nco-page-routing.module';
import { NcoPageTabComponent } from './nco-page-tab/nco-page-tab.component';
import { POLLedgerEntryComponent } from './pol-ledger-entry/pol-ledger-entry.component';
import { POLLedgerEntryHistoryComponent } from './pol-ledger-entry-history/pol-ledger-entry-history.component';


@NgModule({
  declarations: [
    NcoPageComponent,
    NcoPageTabComponent,
    POLLedgerEntryComponent,
    POLLedgerEntryHistoryComponent
  ],
  imports: [
    CommonModule,
    NcoPageRoutingModule
  ]
})
export class NcoPageModule { }
