import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  rezepte = [
    { titel: 'Ceaser Salad', kategorie: 'Vorspeise', zeit: 15, gemacht: true },
    { titel: 'Lasagne', kategorie: 'Hauptgericht', zeit: 30, gemacht: false },
    { titel: 'Tiramisu', kategorie: 'Dessert', zeit: 20, gemacht: false }
  ];
  toggleGemacht(rezept: any) {
    rezept.gemacht = !rezept.gemacht;
  }
}
