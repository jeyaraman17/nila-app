import { Component, Input } from '@angular/core';
import { Course, Credits } from '../../model/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  @Input() courseData: Course[] = [];
  isExpandCourse: boolean = true;
  isExpandCourseName: boolean = true;
  isExpandCourseType: boolean = true;
  isExpandCourseSem: boolean = true;
  isExpandCourseCredit: boolean = true;
  isExpandCO: boolean = true;
  isExpandMC: boolean = true;

  constructor() {}

  toggleCourse() {
    this.isExpandCourse = !this.isExpandCourse;
  }

  toggleCourseName() {
    this.isExpandCourseName = !this.isExpandCourseName;
  }

  toggleCourseType() {
    this.isExpandCourseType = !this.isExpandCourseType;
  }

  toggleCourseSemester() {
    this.isExpandCourseSem = !this.isExpandCourseSem;
  }

  toggleCourseCredit() {
    this.isExpandCourseCredit = !this.isExpandCourseCredit;
  }

  toggleCourseCO() {
    this.isExpandCO = !this.isExpandCO;
  }

  toggleCourseMC() {
    this.isExpandMC = !this.isExpandMC;
  }
}
