import { Component, Input } from '@angular/core';
import { Course, Credits } from '../../model/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  @Input() courseData: Course = <Course>{};

  constructor() {}
}
