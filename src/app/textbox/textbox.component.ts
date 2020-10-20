import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp() {
    
  }
}
