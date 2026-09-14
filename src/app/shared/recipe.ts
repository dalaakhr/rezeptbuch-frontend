import { Injectable } from '@angular/core';

export interface Rezept {
  _id: string;
  titel: string;
  kategorie: string;
  zeit: number;
  gemacht: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiURL = 'http://localhost:3000';

  constructor() { }

  async getAll(): Promise<Rezept[]> {
    let response = await fetch(this.apiURL + '/rezepte');
    let rezepte = await response.json();
    console.log('rezepte im service (getAll): ', rezepte);
    return rezepte;
  }
}