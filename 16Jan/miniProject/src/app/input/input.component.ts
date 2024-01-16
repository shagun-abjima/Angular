import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  public heading='Blog 1';
  public author='Damon Salvatore'
  public description='This is description of Blog 1'
@Output() data=new EventEmitter<{heading:string,author:string,description:string}>();
addBlog(heading:string , author:string , description:string){
this.data.emit({heading:this.heading , author:this.author,description:this.description})
}
constructor(){

}

}
