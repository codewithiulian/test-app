import { Component } from '@angular/core';
import { TwitterModel } from './models/TwitterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [1, 2];
  selected = "map";
}
