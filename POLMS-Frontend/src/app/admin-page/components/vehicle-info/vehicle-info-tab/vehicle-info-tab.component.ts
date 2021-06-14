import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-info-tab',
  templateUrl: './vehicle-info-tab.component.html',
  styleUrls: ['./vehicle-info-tab.component.scss']
})
export class VehicleInfoTabComponent implements OnInit {

  vehicleInfoIsActive:boolean = true;
  entryNewVehicleIsActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  OnClickVehicleInfo():void {
    this.vehicleInfoIsActive = true;
    this.entryNewVehicleIsActive = false;
  }

  OnClickEntryNewVehicle():void {
    this.vehicleInfoIsActive = false;
    this.entryNewVehicleIsActive = true;
  }

}
