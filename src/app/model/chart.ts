export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  label: string;
  backgroundColor: string;
  borderColor?: string; // Optional since it's only needed in attendance
  data: number[];
  fill?: boolean; // Optional since it's only needed in attendance
}
