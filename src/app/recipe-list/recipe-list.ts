/*
 * Komponente für die Rezeptliste.
 * Zeigt alle Rezepte an und enthält die Funktionen zum Anlegen, Bearbeiten,
 * Abhaken und Löschen. Gespeichert wird über den RecipeService im Backend.
 */

//Block 1 importiert die Angular-Bausteine und den RecipeService
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../shared/recipe';

//Block 2 legt fest wie die Komponente heisst und zu welchem HTML und CSS sie gehoert
@Component({
  imports: [FormsModule],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList implements OnInit {
  //Block 3 holt den Service und den ChangeDetector herein und legt die Variablen an
  private rs = inject(RecipeService);
  private cdr = inject(ChangeDetectorRef);

  rezepte: any[] = [];
  neuesRezept = { titel: '', kategorie: '', zeit: 0, zutaten: '', zubereitung: '', gemacht: false, bearbeitung: false };

  //Block 4 wird beim Start automatisch aufgerufen und holt alle Rezepte vom Service,
  //        detectChanges sorgt dafuer, dass die Seite danach neu gezeichnet wird
  ngOnInit(): void {
    this.rs.getAll()
      .then(response => {
        this.rezepte = response;
        console.log('rezepte in RecipeList: ', this.rezepte);
        this.cdr.detectChanges();
      });
  }
  //Block 5 dreht das Feld "gemacht" um und speichert die Aenderung im Backend
  toggleGemacht(rezept: any) {
    rezept.gemacht = !rezept.gemacht;
    this.rs.update(rezept)
      .then(aktualisiertesRezept => {
        Object.assign(rezept, aktualisiertesRezept);
        this.cdr.detectChanges();
      });
  }
  //Block 6 legt ein neues Rezept an,speichert es im Backend und fuegt es der Liste hinzu
  rezeptHinzufuegen() {
    this.rs.create(this.neuesRezept)
      .then(neuesRezept => {
        this.rezepte.push(neuesRezept);
        this.cdr.detectChanges();
      });
    this.neuesRezept = { titel: '', kategorie: '', zeit: 0, zutaten: '', zubereitung: '', gemacht: false, bearbeitung: false };
  }
  //Block 7 oeffnet und schliesst den Bearbeiten-Modus beim Schliessen wird gespeichert
  bearbeiten(rezept: any) {
    if (rezept.bearbeitung) {
      this.rs.update(rezept)
        .then(aktualisiertesRezept => Object.assign(rezept, aktualisiertesRezept));
    }
    rezept.bearbeitung = !rezept.bearbeitung;
  }
  //Block 8 loescht das Rezept ueber seine id im Backend und entfernt es dann aus der Liste
  loeschen(rezept: any) {
    this.rs.delete(rezept._id)
      .then(() => {
        this.rezepte = this.rezepte.filter(r => r !== rezept);
        this.cdr.detectChanges();
      });
  }
}