import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    isFavorite: true,
  }

  isFavoriteOnClick(){
    console.log('IsFavorite has been clicked!');
  }
}
