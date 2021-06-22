import { VehicleServiceService } from './../../../../services/vehicleService/vehicle-service.service';
import { Vehicle } from './../../../../models/vehicle';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-vehicle-info-content',
  templateUrl: './vehicle-info-content.component.html',
  styleUrls: ['./vehicle-info-content.component.scss']
})
export class VehicleInfoContentComponent implements OnInit {

  isClickedToBeDeleted:boolean = false;
  isClickedToBeEdited:boolean = false;
  actionIndex:number = 0;

  vehicles:Vehicle[] = [];
  
  constructor(private vehicleService:VehicleServiceService) {}

  ngOnInit(): void {
    this.GetVehicleList();
  }

  async GetVehicleList(){
    this.vehicles = [];
    this.vehicleService.GetVehiclesInfo().then((res) =>{
      res.result.rows.forEach(async (element: any, i:number) => {
        let vehicle: Vehicle = new Vehicle();
        vehicle.vehicle_id = element[0];
        vehicle.vehicle_type = element[1];
        vehicle.vehicle_class = element[2];
        vehicle.initial_mileage = element[3];
        vehicle.vehicle_issue = element[4];
        this.vehicles.push(vehicle);

        if(i == res.result.rows.length - 1)
        {
          this.vehicles.sort((a:Vehicle,b:Vehicle) => b.vehicle_id - a.vehicle_id);
        }
      });
    });
  }
}
