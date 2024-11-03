export interface WeeklyAttendanceData {
  weekly_data: WeekData[];
}

export interface WeekData {
  week: string;
  attendance: number;
}
