import { CourseService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  courses;
  isActive = true;
  buttonText = 'ON';

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  onKeyUp() {
    console.log('ENTER was pressed');
  }

}
