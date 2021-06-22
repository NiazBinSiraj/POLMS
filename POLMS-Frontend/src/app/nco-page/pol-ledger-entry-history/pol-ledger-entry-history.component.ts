import { NcoServiceService } from './../../services/ncoService/nco-service.service';
import { POL_Ledger } from './../../models/pol_ledger';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pol-ledger-entry-history',
  templateUrl: './pol-ledger-entry-history.component.html',
  styleUrls: ['./pol-ledger-entry-history.component.scss']
})
export class POLLedgerEntryHistoryComponent implements OnInit {

  pols:POL_Ledger[] = [];
  
  constructor(private ncoService: NcoServiceService) { }

  ngOnInit(): void {
    this.GetPOLEntryList();
  }

  async GetPOLEntryList(){
    this.pols = [];
    this.ncoService.GetPOLLedgerEntryHistory().then((res) =>{
      res.result.rows.forEach(async (element: any, i:number) => {
        let pol: POL_Ledger = new POL_Ledger();
        pol.ledger_no = element[0];
        pol.vehicle_id = element[1];
        pol.user_id = element[2];
        pol.user_name = element[3];
        pol.ledger_date = element[4];
        pol.pol_issue_type = element[5];
        pol.pol_issue_amount = element[6];

        this.pols.push(pol);

        if(i == res.result.rows.length - 1)
        {
          this.pols.sort((a:POL_Ledger,b:POL_Ledger) => b.ledger_no - a.ledger_no);
        }
      });
    });
  }

}
