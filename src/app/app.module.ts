import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { AnschreibenComponent } from './anschreiben/anschreiben.component';
import { ArbeitenComponent } from './arbeiten/arbeiten.component';
import { GehaltsvorstellungComponent } from './gehaltsvorstellung/gehaltsvorstellung.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DeckblattComponent } from './deckblatt/deckblatt.component';
import { IndividuelleSeiteComponent } from './individuelle-seite/individuelle-seite.component';
import {RouterModule} from "@angular/router";
import { AllgemeineSeiteComponent } from './individuelle-seite/allgemeine-seite/allgemeine-seite.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ArbeitgeberComponent } from './arbeitgeber/arbeitgeber.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    AnschreibenComponent,
    ArbeitenComponent,
    GehaltsvorstellungComponent,
    FooterComponent,
    DeckblattComponent,
    IndividuelleSeiteComponent,
    AllgemeineSeiteComponent,
    ArbeitgeberComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
