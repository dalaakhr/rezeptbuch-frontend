/*
 * Service für die Verbindung zum Backend
 * Enthält die vier CRUD-Methoden, die per fetch mit dem Backend sprechen.
 */
import { Injectable } from '@angular/core';
//Block1 Interface: beschreibt für TypeScript welche Felder ein Rezept hat
export interface Rezept {
    _id: string;
    titel: string;
    kategorie: string;
    zeit: number;
    gemacht: boolean;
    zutaten: string;
    zubereitung: string;
}
@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    //Block 2 Basis-Adresse des Backends, damit sie nur an einer Stelle steht
    apiURL = 'http://localhost:3000';

    constructor() { }
    //Block 3 holt alle Rezepte vom Backend
    async getAll(): Promise<Rezept[]> {
        let response = await fetch(this.apiURL + '/rezepte');
        let rezepte = await response.json();
        console.log('rezepte im service (getAll): ', rezepte);
        return rezepte;
    }
    //Block 4 legt ein neues Rezept an und schickt es als JSON ans Backend
    async create(rezept: any): Promise<Rezept> {
        let response = await fetch(this.apiURL + '/rezepte', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rezept)
        });
        let neuesRezept = await response.json();
        console.log('neues rezept im service (create): ', neuesRezept);
        return neuesRezept;
    }
    //Block 5 aendert ein Rezept, die id steht in der URL, damit das Backend weiss welches
    async update(rezept: any): Promise<Rezept> {
        let response = await fetch(this.apiURL + '/rezepte/' + rezept._id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rezept)
        });
        let aktualisiertesRezept = await response.json();
        console.log('rezept im service (update): ', aktualisiertesRezept);
        return aktualisiertesRezept;
    }
    //Block 6 loescht das Rezept mit der uebergebenen id
    async delete(id: string): Promise<void> {
        await fetch(this.apiURL + '/rezepte/' + id, {
            method: 'DELETE'
        });
        console.log('rezept geloescht im service (delete): ', id);
    }
}