# 👩‍🍳 Mein Rezeptbuch

**Mein Rezeptbuch** ist eine Webanwendung zum Führen eines modernen Rezeptbuchs.
Nutzerinnen können ihre Rezepte anlegen, verwalten und haben sie immer dabei –
die neue Art, ein Rezeptbuch zu führen.

Rezepte können nicht nur angelegt, sondern auch bearbeitet, gelöscht und als
"schon gekocht" abgehakt werden. Zutaten, Zubereitung und Zubereitungszeit sind
dabei übersichtlich auf einen Blick sichtbar.

---

## Inhaltsverzeichnis

1. [Features](#features)
2. [Verwendete Technologien](#verwendete-technologien)
3. [Screenshots](#screenshots)
4. [Installation](#installation)
5. [Datenbankstruktur](#datenbankstruktur)
6. [KI-Nutzung](#ki-nutzung)
7. [Autorin](#autorin)

---

## Features

- 📝 Rezepte anlegen, anzeigen, bearbeiten und löschen (CRUD)
- 🥘 Zutaten und Zubereitung als mehrzeiliger Text
- ⏱ Angabe der Zubereitungszeit in Minuten
- ✅ Rezepte als "schon gekocht" markieren
- 💾 Speicherung aller Rezepte in einer MongoDB-Datenbank (MongoDB Atlas)
- 🎨 Responsive Design mit Bootstrap

---

## Verwendete Technologien

**Frontend**
- Angular 22
- TypeScript
- HTML5 und CSS3
- Bootstrap 5.3
- Angular Forms (ngModel)
- Fetch API

**Backend**
- Node.js und npm
- Express
- MongoDB (Atlas) mit Mongoose
- dotenv
- CORS

---

## Screenshots

#### Übersicht mit Formular und Rezeptkarten:
![Startseite](./screenshots/startseite.png)

#### Ein Rezept im Bearbeiten-Modus:
![Bearbeiten](./screenshots/bearbeiten.png)

#### Mobile Ansicht:
![Mobil](./screenshots/mobil.png)

---

## Installation

### Voraussetzungen

- Node.js
- Angular CLI (`npm install -g @angular/cli`)
- Zugang zu MongoDB Atlas

### Repositories klonen

```
git clone https://github.com/dalaakhr/rezeptbuch-backend.git
git clone https://github.com/dalaakhr/rezeptbuch-frontend.git
```

### Backend starten

```
cd rezeptbuch-backend
npm install
```

Im Hauptordner eine Datei `.env` anlegen:

```
DB_CONNECTION = mongodb+srv://benutzername:passwort@cluster.mongodb.net
DATABASE = rezeptbuch
```

Danach starten:

```
node server.js
```

Das Backend läuft dann auf http://localhost:3000

### Frontend starten

```
cd rezeptbuch-frontend
npm install
ng serve
```

Die Anwendung ist erreichbar unter http://localhost:4200

---

## Datenbankstruktur

Ein Rezept besteht aus folgenden Feldern:

| Feld | Typ | Bedeutung |
|---|---|---|
| titel | String | Name des Rezepts |
| kategorie | String | z.B. Hauptgericht, Dessert |
| zeit | Number | Zubereitungszeit in Minuten |
| zutaten | String | Zutatenliste |
| zubereitung | String | Zubereitungsschritte |
| gemacht | Boolean | schon gekocht ja/nein |

---

## KI-Nutzung

- **Claude**: Aufbau des Codes, Erklärung von Konzepten, Fehlersuche,
  Code-Kommentare, Design-Ideen, README
- **Gemini**: einzelne  Fragen zum Code

---

## Autorin

Dalaa Khreis – Semesteraufgabe WebTech, HTW Berlin, 2026