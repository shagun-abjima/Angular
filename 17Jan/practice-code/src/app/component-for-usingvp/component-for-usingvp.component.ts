import { Component, EventEmitter, OnInit } from '@angular/core';
import { VpComponentExample } from '../vp-component-example';
class innerClass{
  constructor(){
    console.log('This is inner_class')
  }
}

@Component({
  selector: 'app-component-for-usingvp',
  templateUrl: './component-for-usingvp.component.html',
  styleUrl: './component-for-usingvp.component.css',
  viewProviders:[VpComponentExample , innerClass],
  inputs:["parentData"],
  outputs:["evnt"]
})
export class ComponentForUsingvpComponent implements OnInit {
  evnt=new EventEmitter();
  parentData:any;
constructor(private obj:VpComponentExample, private obj1:innerClass){
obj.displayName('Shagun');
obj1;

}
ngOnInit(): void {
}
display(val:string){
  this.evnt.emit(val);
    }
}
