import { Component, ViewEncapsulation } from '@angular/core';
//emulated,none,shadow dom
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  preserveWhitespaces :true
})
export class AppComponent {
  title = 'practice-code';
  childData:any;
  getData(val:string){
    this.childData.val;

  }
}
