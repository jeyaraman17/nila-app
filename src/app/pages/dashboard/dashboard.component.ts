import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Course } from '../../model/course';
import { ChartData } from 'chart.js';
import { AssessmentProgress } from '../../model/assessment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  courseData: Course = <Course>{};
  chartDataAssessment: AssessmentProgress = <AssessmentProgress>{};
  chartDataAssessmentOptions: any;
  chartDataAttendance: ChartData = <ChartData>{};
  chartAttendanceOptions: any;
  courseError: string = '';
  assessmentError: string = '';
  attendanceError: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCourseDetail();
    this.getAssessmentProgress();
    this.getStudentAttendance();
  }

  getCourseDetail() {
    this.dataService.getCourseInformation().subscribe(
      (response) => (this.courseData = response),
      (err) => console.error(err)
    );
  }

  getAssessmentProgress() {
    this.dataService.getAssessmentProgress().subscribe(
      (response) => {
        this.chartDataAssessment = response;
        this.chartDataAssessmentOptions = {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 25,
                callback: (value: number) => value + '%',
              },
            },
            x: {
              grid: { display: false },
              barPercentage: 0.8,
              categoryPercentage: 0.9,
            },
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                generateLabels: (chart: { data: { datasets: any[] } }) => {
                  const colors: any = {
                    Completed: '#91b07c',
                    Pending: '#e8e8e8',
                  };
                  return Array.from(
                    new Set(chart.data.datasets.map((ds) => ds.label))
                  ).map((label, i) => ({
                    text: label,
                    fillStyle: colors[label],
                    borderColor: colors[label],
                    fontColor: '#4b5563',
                    hidden: false,
                    index: i,
                  }));
                },
              },
            },
          },
        };
      },
      (err) => console.error(err)
    );
  }

  getStudentAttendance() {
    this.dataService.getStudentAttendance().subscribe(
      (response) => {
        this.chartDataAttendance = {
          labels: response?.weekly_data.map((week: any) => week.week),
          datasets: [
            {
              label: 'Attendance',
              backgroundColor: '#383454',
              borderColor: '#a077b1',
              data: response.weekly_data.map((week: any) => week.attendance),
              fill: false,
              borderWidth: 1,
            },
          ],
        };

        this.chartAttendanceOptions = {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { callback: (value: string) => value + '%', stepSize: 25 },
              title: { display: true, text: 'Attendance' },
              grid: { display: false },
            },
            x: { title: { display: true, text: 'Weeks' } },
          },
          plugins: { legend: { display: false } },
        };
      },
      (err) => console.error(err)
    );
  }
}
