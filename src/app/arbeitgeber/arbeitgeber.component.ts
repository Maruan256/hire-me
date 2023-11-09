import { Component } from '@angular/core';
import {Arbeitgeber} from "../arbeitgeber";

@Component({
  selector: 'app-arbeitgeber',
  templateUrl: './arbeitgeber.component.html',
  styleUrls: ['./arbeitgeber.component.scss']
})
export class ArbeitgeberComponent {
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
}
