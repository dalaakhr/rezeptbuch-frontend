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
    async update(rezept: any): Promise<Rezept> {
        let response = await fetch(this.apiURL+'/rezepte/' + rezept._id, {
            method: 'PATCH' ,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rezept)
        });
        let aktualisiertesRezept = await response.json();
        console.log('rezept im service (update): ', aktualisiertesRezept);
        return aktualisiertesRezept;
    }
        async delete(id: string): Promise<void> {
        await fetch(this.apiURL + '/rezepte/' + id, {
            method: 'DELETE'
        });
        console.log('rezept geloescht im service (delete): ', id);
    }
}