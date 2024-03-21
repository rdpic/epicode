import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
