import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableSectionComponent } from './table-section/table-section.component';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from './table-section/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableSectionComponent,
  
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
