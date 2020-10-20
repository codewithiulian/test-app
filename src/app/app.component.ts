import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './models/FavoriteChangedEventArgs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    isFavorite: true,
  }

  isFavoriteOnClick(eventArgs: FavoriteChangedEventArgs) {
    console.log('IsFavorite changed: ', eventArgs);
  }
}
