import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empName: string = '';
  empSalary:string = '';
  emps: Employee[];
  show: boolean = false;
  touched: boolean = true;
   

  constructor(protected employeeService: EmployeeService) {
    
   }

  ngOnInit(): void {
    // this.emps = this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe(
      (response: any) => {
        this.emps = response;
      }
    );
  }
  
  toggleAdd(){
    this.show = !this.show;
  }

  addEmployee(){
    
    
    let emp:Employee = {
                        eId: 0,
                        eName: this.empName,
                        eSalary: this.empSalary
                       };
    
    this.employeeService.addEmployee(emp).subscribe(
      (response: any)=>{
        this.emps.push(response);
      }
    );
    this.empName = '';
    this.empSalary = '';

  }

 /* deleteEmployee(eId:number){
    var emp:Employee;
    var size
  }*/
  
}
