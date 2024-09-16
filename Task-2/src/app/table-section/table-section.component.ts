import { Component, OnInit } from '@angular/core';
import { employee } from './employee.model';
@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrl: './table-section.component.css'
})
export class TableSectionComponent implements OnInit{
  searchText='';
  EmployeeId:Number;
  FirstName="";
  LastName="";
  Department="";
  editMode:boolean=false;
  editEmployeeId:number
 
  employees:employee[]=[
    new employee(1,"Chris","Hemsworth","Accounts"),
    new employee(2,"Damon","Salvatore","IT"),
    new employee(3,"Elena","Ferrante","Marketing")
  ];

  deleteRow(EmployeeId){
    for(let i = 0; i < this.employees.length; ++i){
        if (this.employees[i].EmployeeId === EmployeeId) {
            this.employees.splice(i,1);
        }
    }}
    
    addEmployee(){
      this.employees.push({
             EmployeeId:this.employees.length+1,
             FirstName:this.FirstName,
             LastName:this.LastName,
             Department:this.Department,
            
                   })
                 
   
      }
    
      EditMode(EmployeeId: number): void {
        this.editMode = !this.editMode;
        this.editEmployeeId = EmployeeId;
      }
constructor(){}
ngOnInit(): void {}
onEdit(item){
  item.isEdit=true;
}
}

