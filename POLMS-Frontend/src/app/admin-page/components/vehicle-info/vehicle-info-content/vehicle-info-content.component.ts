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
  
  constructor() {
    //For Testing. Should be deleted before production
    let vehicle = new Vehicle();
    vehicle.vehicle_id = 1;
    vehicle.vehicle_type = "Demo";
    vehicle.vehicle_class = "Demo";
    vehicle.vehicle_issue = "Demo";
    vehicle.initial_mileage = "Demo";
    vehicle.total_mileage = "Demo";
    vehicle.total_issue_POL_type = "Demo";
    vehicle.total_issue_POL_amount = "Demo";
    vehicle.total_usage_POL_type = "Demo";
    vehicle.total_usage_POL_amount = "Demo";
    vehicle.total_POL_stock = "Demo";
    vehicle.last_update = "Demo";

    this.vehicles.push(vehicle);
  }

  ngOnInit(): void {
  }

  OnClickEdit(index:number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Edited.");
    this.isClickedToBeEdited = true;
  }

  OnClickCancelUpdate(): void{
    console.log(this.actionIndex + "is Canceled Edited.");
    this.isClickedToBeEdited = false;
  }

  OnClickDelete(index: number): void{
    this.actionIndex = index;
    console.log(this.actionIndex + "is clicked to be Deleted.");
    this.isClickedToBeDeleted = true;
  }

  OnClickYesDelete(): void{
    console.log(this.actionIndex + "is Deleted.");
    this.isClickedToBeDeleted = false;
  }

  OnClickNoDelete(): void{
    console.log(this.actionIndex + "is not Deleted.");
    this.isClickedToBeDeleted = false;
  }
}
