import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../shared/recipe';

@Component({
  imports: [FormsModule],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList implements OnInit {
  private rs = inject(RecipeService);

  rezepte: any[] = [];
  neuesRezept = { titel: '', kategorie: '', zeit: 0, gemacht: false, bearbeitung: false };

  ngOnInit(): void {
    this.rs.getAll()
      .then(response => this.rezepte = response)
      .then(rezepte => console.log('rezepte in RecipeList: ', rezepte));
  }

  toggleGemacht(rezept: any) {
    rezept.gemacht = !rezept.gemacht;
  }
  rezeptHinzufuegen() {
    this.rezepte.push({ ...this.neuesRezept });
    this.neuesRezept = { titel: '', kategorie: '', zeit: 0, gemacht: false, bearbeitung: false };
  }
  bearbeiten(rezept: any) {
    rezept.bearbeitung = !rezept.bearbeitung;
  }
  loeschen(rezept: any) {
    this.rezepte = this.rezepte.filter(r => r !== rezept);
  }
} 
