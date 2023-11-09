import { Injectable } from '@angular/core';
import { Arbeitgeber } from "./arbeitgeber";

@Injectable({
  providedIn: 'root'
})
export class AktuelleFirmaService {
  private arbeitgeberListe:Arbeitgeber[] = [
    {
      id: 1,
      name: "google",
      code: "qwertz",

    },
    {
      id: 2,
      name: "pornhub",
      code: "sex",
    }
  ];
  private aktuelleFirmaId: number = 0;
  getAktuelleFirmaId(): number {
    return this.aktuelleFirmaId;
  }
  getArbeitgeberListe(): Arbeitgeber[]{
    return this.arbeitgeberListe;
  };
  checkArbeitgeberMatch(submittedCode: string){
    for (let firma of this.arbeitgeberListe){
      if (firma.code.toLowerCase() == submittedCode.toLowerCase()) {
        this.aktuelleFirmaId = firma.id;
        console.log(this.aktuelleFirmaId)
        break
      }else{
        this.aktuelleFirmaId = 0;
      }
    }
  }
  constructor() { }
}
