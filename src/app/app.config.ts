import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // schaltet die automatische Aenderungserkennung von Angular ein 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};