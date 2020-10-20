import { Component } from '@angular/core';
import { TwitterModel } from './models/TwitterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  twitter: TwitterModel = {
    likesCount: 0,
    isActive: false
  }

  onChanged(twitter: TwitterModel) {
    this.twitter = twitter;
    console.log(this.twitter);
  }
}
