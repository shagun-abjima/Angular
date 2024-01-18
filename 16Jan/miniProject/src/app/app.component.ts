import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miniProject';
  public model={heading:'', author:'' , description:''};

  addBlog(data){
    console.log(data)
  this.model=data;
  }



}
