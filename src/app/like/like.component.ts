import { isNgContainer } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TwitterModel } from '../models/TwitterModel';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') change = new EventEmitter();
  iconUrl = '/assets/icons/heart.svg';

  onClick() {
    this.toggleLike();
    this.change.emit({ likesCount: this.likesCount, isActive: this.isActive });
  }

  toggleLike() {
    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? this.likesCount + 1 : this.likesCount - 1;
  }

}
