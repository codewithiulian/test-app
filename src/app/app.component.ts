import { Component } from '@angular/core';
import { TwitterModel } from './models/TwitterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  canSave = true;
}
