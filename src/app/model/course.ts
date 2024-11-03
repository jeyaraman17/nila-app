export interface Course {
  course_code: string;
  course_name: string;
  course_type: string;
  course_period: string;
  credits: any;
  course_outcomes: string[];
  mapped_program_outcomes: string[];
}

export interface Credits {
  lecture: number;
  tutorial: number;
  practical: number;
  project: number;
}
