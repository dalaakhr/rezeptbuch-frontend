import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  rezepte = [
    { titel: 'Ceaser Salad', kategorie: 'Vorspeise', zeit: 15, gemacht: true, bearbeitung: false },
    { titel: 'Lasagne', kategorie: 'Hauptgericht', zeit: 30, gemacht: false, bearbeitung: false },
    { titel: 'Tiramisu', kategorie: 'Dessert', zeit: 20, gemacht: false, bearbeitung: false  }
  ];
    neuesRezept = { titel: '', kategorie: '', zeit: 0, gemacht: false , bearbeitung: false };
  toggleGemacht(rezept: any) {
    rezept.gemacht = !rezept.gemacht;
  }
    rezeptHinzufuegen() {
    this.rezepte.push({ ...this.neuesRezept });
    this.neuesRezept = { titel: '', kategorie: '', zeit: 0, gemacht: false , bearbeitung: false };
  }
    bearbeiten(rezept: any) {
    rezept.bearbeitung = !rezept.bearbeitung;
  }
}
