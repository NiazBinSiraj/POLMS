import { DriverServiceService } from './../../services/driverService/driver-service.service';
import { VDRA } from './../../models/vdra';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vdra-entry-history',
  templateUrl: './vdra-entry-history.component.html',
  styleUrls: ['./vdra-entry-history.component.scss']
})
export class VDRAEntryHistoryComponent implements OnInit {

  vdras:VDRA[] = [];
  
  constructor(private driverService:DriverServiceService) { }

  ngOnInit(): void {
    this.GetVDRAEntryList();
  }

  async GetVDRAEntryList(){
    this.vdras = [];
    this.driverService.GetVDRAEntryHistory().then((res) =>{
      res.result.rows.forEach(async (element: any, i:number) => {
        let vdra: VDRA = new VDRA();
        vdra.entry_no = element[0];
        vdra.vehicle_id = element[1];
        vdra.user_id = element[2];
        vdra.user_name = element[3];
        vdra.entry_date = element[4];
        vdra.daily_mileage = element[5];
        vdra.POL_usage_type = element[6];
        vdra.POL_usage_amount = element[7];

        this.vdras.push(vdra);

        if(i == res.result.rows.length - 1)
        {
          this.vdras.sort((a:VDRA,b:VDRA) => b.entry_no - a.entry_no);
        }
      });
    });
  }
}
