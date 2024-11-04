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
  courseData: any[] = [];
  courseMainData: Course[] = [];
  chartDataAssessment: AssessmentProgress = <AssessmentProgress>{};
  chartDataAssessmentOptions: any;
  chartDataAttendance: ChartData = <ChartData>{};
  chartAttendanceOptions: any;
  courseError: string = '';
  assessmentError: string = '';
  attendanceError: string = '';
  searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getCourseDetail();
    this.getAssessmentProgress();
    this.getStudentAttendance();
  }

  getCourseDetail() {
    this.dataService.getCourseInformation().subscribe(
      (response) => (this.courseMainData = this.courseData = response),
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

  filterCourses(searchText: string): void {
    if (!searchText) {
      this.courseData = this.courseMainData;
      return;
    }

    const searchLower = searchText.toLowerCase();

    // Filter and map the courses based on exact matches in relevant properties
    this.courseData = this.courseMainData
      .filter((course: Course) => {
        return (
          course.course_code.toLowerCase() === searchLower ||
          course.course_name.toLowerCase() === searchLower ||
          course.course_type.toLowerCase() === searchLower ||
          course.course_period.toLowerCase() === searchLower ||
          course.course_outcomes.some(
            (outcome) => outcome.toLowerCase() === searchLower
          ) ||
          course.mapped_program_outcomes.some(
            (mappedOutcome) => mappedOutcome.toLowerCase() === searchLower
          )
        );
      })
      .map((course: Course) => {
        return {
          course_code:
            course.course_code.toLowerCase() === searchLower
              ? course.course_code
              : null,
          course_name:
            course.course_name.toLowerCase() === searchLower
              ? course.course_name
              : null,
          course_type:
            course.course_type.toLowerCase() === searchLower
              ? course.course_type
              : null,
          course_period:
            course.course_period.toLowerCase() === searchLower
              ? course.course_period
              : null,
          credits: course.credits,
          course_outcomes: course.course_outcomes.filter(
            (outcome) => outcome.toLowerCase() === searchLower
          ),
          mapped_program_outcomes: course.mapped_program_outcomes.filter(
            (mappedOutcome) => mappedOutcome.toLowerCase() === searchLower
          ),
        };
      });
  }
}
