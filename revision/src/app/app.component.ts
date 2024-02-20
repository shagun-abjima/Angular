import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'revision';
  display=false;
  searchText:string='demoText';
//assignment
username= '';
showSecret=false;
log=[];
onToggleDetails(){
  this.showSecret=!this.showSecret
  this.log.push(this.log.length + 1);
}

}
