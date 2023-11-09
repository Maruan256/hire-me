import { Component, Input } from '@angular/core';
import { Arbeitgeber } from "../arbeitgeber";
import { ArbeitgeberComponent} from "../arbeitgeber/arbeitgeber.component";
import { DeckblattComponent } from "../deckblatt/deckblatt.component";
import {AktuelleFirmaService} from "../aktuelle-firma.service";

@Component({
  selector: 'app-individuelle-seite',
  templateUrl: './individuelle-seite.component.html',
  styleUrls: ['./individuelle-seite.component.scss']
})
export class IndividuelleSeiteComponent {
  @Input() arbeitgeber!: Arbeitgeber [];

  constructor(private aktuelleFirma: AktuelleFirmaService) {
  }
  getAktuelleFirma(){
    return this.aktuelleFirma
  }

}
