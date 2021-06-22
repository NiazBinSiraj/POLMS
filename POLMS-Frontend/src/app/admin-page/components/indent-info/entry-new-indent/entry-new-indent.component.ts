import { Indent } from './../../../../models/indent';
import { IndentServiceService } from './../../../../services/indentService/indent-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-new-indent',
  templateUrl: './entry-new-indent.component.html',
  styleUrls: ['./entry-new-indent.component.scss']
})
export class EntryNewIndentComponent implements OnInit {

  newIndent:Indent = new Indent();
  
  constructor(private indentService:IndentServiceService) { }

  ngOnInit(): void {
    this.OnClickSubmit();
  }

  async OnClickSubmit(){
    await this.indentService.InsertIndent(this.newIndent).then((res) => {
      if(res.status == 201)
      {
        console.log("indent inserted");
      }
    }).catch(console.error);
  }

  OnEditIndentId(event:any){
    this.newIndent.indent_id = event.target.value;
  }

  OnEditIndentIssue(event:any){
    this.newIndent.indent_issue = event.target.value;
  }

  OnEditIndentExpire(event:any){
    this.newIndent.indent_expire = event.target.value;
  }

  OnEditVehicleType(event:any){
    this.newIndent.vehicle_type = event.target.value;
  }

  OnEditNoOfVehicles(event:any){
    this.newIndent.no_of_vehicles = event.target.value;
  }

}
