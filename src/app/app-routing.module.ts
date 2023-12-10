import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DeckblattComponent} from "./deckblatt/deckblatt.component";
import {CvComponent} from "./cv/cv.component";
import {GehaltsvorstellungComponent} from "./gehaltsvorstellung/gehaltsvorstellung.component";
import {ArbeitenComponent} from "./arbeiten/arbeiten.component";
import {AnschreibenComponent} from "./anschreiben/anschreiben.component";
import {IndividuelleSeiteComponent} from "./individuelle-seite/individuelle-seite.component";
import {AllgemeineSeiteComponent} from "./individuelle-seite/allgemeine-seite/allgemeine-seite.component";
import {DieseSeiteComponent} from "./diese-seite/diese-seite.component";

const routes: Routes = [
  { path: '', component: DeckblattComponent},
  { path: 'cv', component: CvComponent},
  { path: 'gehaltsVorstellung', component: GehaltsvorstellungComponent},
  { path: 'arbeiten', component: ArbeitenComponent},
  { path: 'anschreiben', component: AnschreibenComponent},
  { path: 'individuelleSeite/:id', component: IndividuelleSeiteComponent,
    children: [
      {path: 'anschreiben', component: AnschreibenComponent},
      { path: 'arbeiten', component: ArbeitenComponent},
      { path: 'cv', component: CvComponent},

    ]},
  { path: 'allgemeineSeite', component: AllgemeineSeiteComponent},
  { path: 'dieseSeite', component: DieseSeiteComponent}



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
