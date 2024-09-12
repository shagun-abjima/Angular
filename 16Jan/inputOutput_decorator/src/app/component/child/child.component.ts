import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() name
@Input() obj
@Output() dataEvent= new EventEmitter<string>()
addUser(value){
  this.dataEvent.emit(value);
}
}
