import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.scss'],
})
export class AssessmentProgressComponent {
  @Input() chartDataAssessment: ChartData = <ChartData>{};
  @Input() chartDataAssessmentOptions: any;

  constructor() {}
}
