import { Vehicle } from './../../../../models/vehicle';
import { VehicleServiceService } from './../../../../services/vehicleService/vehicle-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-new-vehicle',
  templateUrl: './entry-new-vehicle.component.html',
  styleUrls: ['./entry-new-vehicle.component.scss']
})
export class EntryNewVehicleComponent implements OnInit {

  newVehicle:Vehicle = new Vehicle();
  
  constructor(private vehicleService:VehicleServiceService) { }

  ngOnInit(): void {
    this.OnClickSubmit();
  }

  async OnClickSubmit(){
    await this.vehicleService.InsertVehicle(this.newVehicle).then((res) => {
      if(res.status == 201)
      {
        console.log("vehicle inserted");
      }
    }).catch(console.error);
  }

  OnEditVehicleId(event:any){
    this.newVehicle.vehicle_id = event.target.value;
  }

  OnEditVehicleType(event:any){
    this.newVehicle.vehicle_type = event.target.value;
  }

  OnEditVehicleClass(event:any){
    this.newVehicle.vehicle_class = event.target.value;
  }

  OnEditInitialMileage(event:any){
    this.newVehicle.initial_mileage = event.target.value;
  }

  OnEditVehicleIssue(event:any){
    this.newVehicle.vehicle_issue = event.target.value;
  }

}
