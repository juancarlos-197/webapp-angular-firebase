import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"categorias-admin-app-2a126","appId":"1:743485974824:web:e6f8af93d85fe8213b481d","storageBucket":"categorias-admin-app-2a126.firebasestorage.app","apiKey":"AIzaSyDuHK-BptFu2IwxKpVEqG_BOnXh0kYbjqQ","authDomain":"categorias-admin-app-2a126.firebaseapp.com","messagingSenderId":"743485974824"})), provideFirestore(() => getFirestore())]
};
