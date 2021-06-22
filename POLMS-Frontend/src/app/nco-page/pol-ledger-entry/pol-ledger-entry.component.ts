import { AppState } from 'src/app-state';
import { NcoServiceService } from './../../services/ncoService/nco-service.service';
import { POL_Ledger } from './../../models/pol_ledger';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pol-ledger-entry',
  templateUrl: './pol-ledger-entry.component.html',
  styleUrls: ['./pol-ledger-entry.component.scss']
})
export class POLLedgerEntryComponent implements OnInit {

  newPolEntry:POL_Ledger = new POL_Ledger();
  
  constructor(private ncoService:NcoServiceService) { }

  ngOnInit(): void {
  }

  async OnClickSubmit(){
    this.newPolEntry.user_id = AppState.instance.user_id;
    this.newPolEntry.user_name = AppState.instance.user_name;
    await this.ncoService.InsertPOLLedger(this.newPolEntry).then((res) => {
      if(res.status == 201)
      {
        console.log("pol inserted");
      }
    }).catch(console.error);
  }

  OnEditVehicleId(event:any){
    this.newPolEntry.vehicle_id = event.target.value;
  }

  OnEditLedgerNo(event:any){
    this.newPolEntry.ledger_no = event.target.value;
  }

  OnEditLedgerDate(event:any){
    this.newPolEntry.ledger_date = event.target.value;
  }

  OnEditPOLIssueType(event:any){
    this.newPolEntry.pol_issue_type = event.target.value;
  }

  OnEditPOLIssueAmount(event:any){
    this.newPolEntry.pol_issue_amount = event.target.value;
  }

}
