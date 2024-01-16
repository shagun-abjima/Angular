import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 currentName='Shagun';
 user={ 
  name:'shagun',
  age:23
 }
 users=['A','B'];
 addUser(user){
  this.users.push(user)
 }
}
