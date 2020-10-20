import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  icon = 'star'
  iconUrl: string;
  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.buildIcon();
  }

  buildIcon() {
    this.icon = this.isFavorite ? 'star-fill' : 'star';
    this.iconUrl = `/assets/icons/${this.icon}.svg`
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.buildIcon();
    this.change.emit({ newValue: this.isFavorite });
  }

}
