import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  rezepte: any[] = [];
  neuesRezept = { titel: '', kategorie: '', zeit: 0, zutaten: '', zubereitung: '', gemacht: false, bearbeitung: false };

  ngOnInit(): void {
    this.rs.getAll()
      .then(response => {
        this.rezepte = response;
        console.log('rezepte in RecipeList: ', this.rezepte);
        this.cdr.detectChanges();
      });
  }
  toggleGemacht(rezept: any) {
    rezept.gemacht = !rezept.gemacht;
    this.rs.update(rezept)
      .then(aktualisiertesRezept => {
        Object.assign(rezept, aktualisiertesRezept);
        this.cdr.detectChanges();
      });
  }
  rezeptHinzufuegen() {
    this.rs.create(this.neuesRezept)
      .then(neuesRezept => {
        this.rezepte.push(neuesRezept);
        this.cdr.detectChanges();
      });
    this.neuesRezept = { titel: '', kategorie: '', zeit: 0, zutaten: '', zubereitung: '', gemacht: false, bearbeitung: false };
  }
  bearbeiten(rezept: any) {
    if (rezept.bearbeitung) {
      this.rs.update(rezept)
        .then(aktualisiertesRezept => Object.assign(rezept, aktualisiertesRezept));
    }
    rezept.bearbeitung = !rezept.bearbeitung;
  }
  loeschen(rezept: any) {
    this.rs.delete(rezept._id)
      .then(() => {
        this.rezepte = this.rezepte.filter(r => r !== rezept);
        this.cdr.detectChanges();
      });
  }
}