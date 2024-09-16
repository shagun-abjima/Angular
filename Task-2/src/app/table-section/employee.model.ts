export class employee{
    public EmployeeId:number
    public FirstName:string
    public LastName:string
    public Department:string
  
    constructor(EmployeeId:number,FirstName:string,LastName:string,Department:string){
        this.EmployeeId=EmployeeId;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Department=Department;
   
    }
    }