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
  imageUrl = "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  onButtonClick() {
    this.isActive = !this.isActive;
  }

}
