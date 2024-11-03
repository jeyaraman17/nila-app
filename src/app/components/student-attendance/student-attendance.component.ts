import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent {
  @Input() chartDataAttendance: ChartData = <ChartData>{};
  @Input() chartAttendanceOptions: any;

  constructor() {}
}
