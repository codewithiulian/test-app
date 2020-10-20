import { CourseService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue ligula at ex finibus interdum. Nam sed diam in nisl consequat congue. Curabitur vulputate, elit ut venenatis dignissim, ante metus faucibus justo, in luctus massa est vel nisi. Nulla urna odio, convallis sed faucibus ac, dictum quis mauris. Quisque condimentum lectus quis orci iaculis tincidunt. Sed ac dui malesuada, varius neque non, porttitor quam. Maecenas volutpat nibh in turpis vestibulum, id fringilla metus cursus. Aliquam in metus mollis, fermentum ex sed, malesuada felis. Duis vitae tortor id libero posuere pellentesque vitae non ligula. `;

  constructor(service: CourseService) {
  }

  ngOnInit(): void {
  }

}
