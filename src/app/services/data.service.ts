import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { WeeklyAttendanceData } from '../model/student-attendance';
import { AssessmentProgress } from '../model/assessment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCourseInformation(): Observable<Course> {
    return this.http.get<Course>('/assets/json/courseInformation.json');
  }

  getAssessmentProgress(): Observable<AssessmentProgress> {
    return this.http.get<AssessmentProgress>(
      '/assets/json/assessmentProgress.json'
    );
  }

  getStudentAttendance(): Observable<WeeklyAttendanceData> {
    return this.http.get<WeeklyAttendanceData>(
      '/assets/json/studentAttendance.json'
    );
  }
}
