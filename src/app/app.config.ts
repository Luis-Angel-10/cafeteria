import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
<<<<<<< HEAD
    provideRouter(routes, withComponentInputBinding()),
=======
    provideRouter(routes),
>>>>>>> 4067be81ec04526e28e2a05eb0d0459c25212504
    provideHttpClient(withFetch())
  ]
};
