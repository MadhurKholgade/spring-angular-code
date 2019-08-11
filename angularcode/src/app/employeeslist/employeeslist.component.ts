import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../employees.service";
@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.less']
})
export class EmployeeslistComponent {

  constructor(private _empService:EmployeesService) { }
  employees = this._empService.getEmployees();

}
