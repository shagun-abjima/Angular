export class AccountService{
    accounts=[
        {name:'A',status:'active'},
        {name:'B',status:'inactive'},
        {name:'C',status:'unknown'},
    ];
    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status})
    }
    updateStatus(id:number,status:string){
        this.accounts[id].status=status;
    }
}