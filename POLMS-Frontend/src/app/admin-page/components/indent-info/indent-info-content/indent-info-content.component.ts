import { IndentServiceService } from './../../../../services/indentService/indent-service.service';
import { Indent } from './../../../../models/indent';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-indent-info-content',
  templateUrl: './indent-info-content.component.html',
  styleUrls: ['./indent-info-content.component.scss']
})
export class IndentInfoContentComponent implements OnInit {

  isClickedToBeDeleted:boolean = false;
  isClickedToBeEdited:boolean = false;
  actionIndex:number = 0;

  indents:Indent[] = [];
  
  constructor(private indentService:IndentServiceService) {}

  ngOnInit(): void {
    this.GetIndentList();
  }

  async GetIndentList(){
    this.indents = [];
    this.indentService.GetIndentsInfo().then((res) =>{
      res.result.rows.forEach(async (element: any, i:number) => {
        let indent: Indent = new Indent();
        indent.indent_id = element[0];
        indent.indent_issue = element[1];
        indent.indent_expire = element[2];
        indent.vehicle_type = element[3];
        indent.no_of_vehicles = element[4];

        this.indents.push(indent);

        if(i == res.result.rows.length - 1)
        {
          this.indents.sort((a:Indent,b:Indent) => b.indent_id - a.indent_id);
        }
      });
    });
  }

}
