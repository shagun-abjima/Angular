import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {
recipies:Recipe[]=[
  new Recipe('Burgir' , 'Buns with veggies and mayo','https://media.istockphoto.com/id/914486024/photo/full-english-breakfast-in-vintage-frying-pan-on-dark-wooden-table-top-view.jpg?s=1024x1024&w=is&k=20&c=OCYx3aNL7783grqg8XEWqhZ7zlMFSu2jYSNy-Mg2PWc=')
];

constructor(){}
ngOnInit(){}
}
