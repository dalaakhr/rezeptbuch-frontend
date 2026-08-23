import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
    rezepte = [
      { titel: 'Ceaser Salad', kategorie: 'Vorspeise', zeit: 15 },
      { titel: 'Lasagne', kategorie: 'Hauptgericht', zeit: 30 },
      { titel: 'Tiramisu', kategorie: 'Dessert', zeit: 20 }
    ];
}
