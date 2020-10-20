import { CourseService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course = {
    title: "My very first course",
    rating: 4.9745,
    students: 5280,
    price: 49.99,
    releaseDate: new Date(2020, 10, 20)
  }

  constructor(service: CourseService) {
  }

  ngOnInit(): void {
  }

}
