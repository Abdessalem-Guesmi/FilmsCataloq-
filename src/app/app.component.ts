import { Component } from '@angular/core';
import {Films} from '../api/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  film= Films;
  title = 'FilmsCatalogue';
}
