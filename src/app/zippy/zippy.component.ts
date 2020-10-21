import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean = true;
  icon: string;
  iconSrc: string;

  ngOnInit(): void {
    this.bindIcon();
  }

  bindIcon(){
    this.icon = this.isExpanded ? "down" : "up";
    this.iconSrc = `/assets/icons/chevron-${this.icon}.svg`;
  }

  toggle(){
    this.isExpanded = !this.isExpanded
    this.bindIcon()
  }
}
