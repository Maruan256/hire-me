import { Injectable } from '@angular/core';
import {Arbeitgeber} from "./arbeitgeber";

@Injectable({
  providedIn: 'root'
})
export class FirmenDatenService {
  arbeitgeber: Arbeitgeber[] = [
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
  constructor() { }
}
