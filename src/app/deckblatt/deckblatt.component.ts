import { Component } from '@angular/core';
import { RouterModule} from "@angular/router";
import { FormControl } from "@angular/forms";
import { Output, EventEmitter } from "@angular/core";
import {AktuelleFirmaService} from "../aktuelle-firma.service";

@Component({
  selector: 'app-deckblatt',
  templateUrl: './deckblatt.component.html',
  styleUrls: ['./deckblatt.component.scss']
})
export class DeckblattComponent {
  @Output() submittedCode = new EventEmitter<string>()
  code = new FormControl('');
  pathFuerSeite: number = 0;
  constructor(private checkCodeFuerFirma: AktuelleFirmaService) {
  }
 submitCode(value: string){
   this.checkCodeFuerFirma.checkArbeitgeberMatch(value);
   this.pathFuerSeite = this.checkCodeFuerFirma.getAktuelleFirmaId();
   console.log(this.pathFuerSeite)
 }
 getCheckCodeFuerFirma(){
    return this.checkCodeFuerFirma
 }
 getPathFuerSeite(){
    return this.pathFuerSeite
 }
}

