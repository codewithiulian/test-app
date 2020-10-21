import { Component } from '@angular/core';
import { TwitterModel } from './models/TwitterModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
  ];

  onAdd(){
    let id = this.courses[this.courses.length-1].id + 1;
    this.courses.push({ id: id, name: `Course ${id}` });
  }

  onRemove(course){
    this.courses.splice(this.courses.indexOf(course), 1);
  }
}
