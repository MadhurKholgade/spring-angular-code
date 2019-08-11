import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  employees = [
    {
      firstname: "Mark",
      lastname: "Zucker",
      age: 30
    },
    {
      firstname: "Rahul",
      lastname: "Khedkar",
      age: 60
    },
    {
      firstname: "Madhur",
      lastname: "Kholgade",
      age: 21
    }
  ];

  getEmployees() {
    return this.employees;
  }

}
