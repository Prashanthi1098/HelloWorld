import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployees: Employee[];


  constructor(protected http: HttpClient) {
    // this.allEmployees = [
    //                       {eId:1, eName:"John", eSalary:12840},
    //                       {eId:2, eName:"Van Halsing", eSalary:5620},
    //                       {eId:3, eName:"Jhonny Bravo", eSalary:1540},
    //                       {eId:4, eName:"Robert Stark", eSalary:9840}
    //                     ];
   }

  getAllEmployees(): any{
    return this.http.get("http://localhost:8098/api/employee/all");
  }


  addEmployee(employee: Employee): any{   
    return this.http.post("http://localhost:8098/api/employee", employee);
    
  }
  deleteEmployee(eId:number){
    return this.http.delete("http://localhost:8098/api/employee"+eId);
  }


  // updateEmployee(id: number, name: string, salary: number){
    
  //   let emp:Employee;
  //   let size: number = this.allEmployees.length;

  //   for(let i=0; i < size; i++){
  //     if(this.allEmployees[i].eId==id){
  //       this.allEmployees[i].eId = id;
  //       this.allEmployees[i].eName = name;
  //       this.allEmployees[i].eSalary = salary;
  //       break;
  //     }
  //   }
  // }


  // getEmployee(eId: number):Employee{
  //   let employee:Employee;
  //   let size: number = this.allEmployees.length;
  //   for(let i=0; i < size; i++){
  //     if(this.allEmployees[i].eId==eId){
  //       employee = {
  //                     eId: this.allEmployees[i].eId,
  //                     eName: this.allEmployees[i].eName,
  //                     eSalary: this.allEmployees[i].eSalary
  //                   };
  //       break;
  //     }
  //   }
    
  //   return employee;
  // }

  // deleteEmployee(eId: number){
  //   let size: number = this.allEmployees.length;
  //   for(let i=0;i<size;i++){
  //     if(this.allEmployees[i].eId==eId){
  //       this.allEmployees.splice(i,1);
  //       break;
  //     }
  //   }
  // }


}
