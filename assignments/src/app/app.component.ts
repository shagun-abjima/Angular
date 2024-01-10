import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username= '';
  showSecret=false;
  log=[];
  onToggleDetails(){
    this.showSecret=!this.showSecret
    this.log.push(this.log.length + 1);
  }
}
