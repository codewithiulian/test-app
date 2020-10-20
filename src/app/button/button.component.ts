import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  uri: string = "assets/icons/";
  icon: string = "star";
  iconUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.buildIcon();
  }

  buildIcon(){
    this.iconUrl = this.uri + this.icon + ".svg";
  }
  
  onClick(){
    this.icon = this.icon == "star" ? "star-fill" : "star";
    this.buildIcon();
  }

}
