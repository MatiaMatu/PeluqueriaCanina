import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFirestoreModule],
  providers: [
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              provideFirebaseApp(() => initializeApp({"projectId":"peluqueriacanina-5fb81","appId":"1:838252232798:web:6d9c6320f92f3c1ec6b4cf","storageBucket":"peluqueriacanina-5fb81.appspot.com","apiKey":"AIzaSyC0lY0dzh5SuyxY3_e20b8bEZ0WCkDKE2Y","authDomain":"peluqueriacanina-5fb81.firebaseapp.com","messagingSenderId":"838252232798"})),
              provideAuth(() => getAuth()),
              provideAnalytics(() => getAnalytics()),
              ScreenTrackingService,
              UserTrackingService,
              provideFirestore(() => getFirestore()),
              provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
