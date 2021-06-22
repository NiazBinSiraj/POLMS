import { DriverServiceService } from './../../services/driverService/driver-service.service';
import { VDRA } from './../../models/vdra';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app-state';

@Component({
  selector: 'app-vdra-entry',
  templateUrl: './vdra-entry.component.html',
  styleUrls: ['./vdra-entry.component.scss']
})
export class VDRAEntryComponent implements OnInit {

  newvdra:VDRA = new VDRA();
  
  constructor(private driverService: DriverServiceService) { }

  ngOnInit(): void {
  }

  async OnClickSubmit(){
    this.newvdra.user_id = AppState.instance.user_id;
    this.newvdra.user_name = AppState.instance.user_name;
    await this.driverService.InsertVDRA(this.newvdra).then((res) => {
      if(res.status == 201)
      {
        console.log("vdra inserted");
      }
    }).catch(console.error);
  }

  OnEditVehicleId(event:any){
    this.newvdra.vehicle_id = event.target.value;
  }

  OnEditEntryNo(event:any){
    this.newvdra.entry_no = event.target.value;
  }

  OnEditEntryDate(event:any){
    this.newvdra.entry_date = event.target.value;
  }

  OnEditDailyMileage(event:any){
    this.newvdra.daily_mileage = event.target.value;
  }

  OnEditPOLUsageType(event:any){
    this.newvdra.POL_usage_type = event.target.value;
  }

  OnEditPOLUsageAmount(event:any){
    this.newvdra.POL_usage_amount = event.target.value;
  }

}
