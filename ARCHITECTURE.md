# Architectural Diagram

This document describes the architecture of the Angular application, focusing on how the components, service layer, and data assets are structured.

## Architecture Overview

The application follows a layered architecture, where the presentation, service, and data layers are organized to keep the code modular, maintainable, and scalable.

### 1. Presentation Layer (Components)

This layer contains the Angular components responsible for rendering the UI and handling user interactions.

- **DashboardComponent**: This is the main component that acts as the parent for other components on the dashboard page.
  - **CourseInfoComponent**: Displays course information fetched from a JSON file (`course-info.json`).
  - **AssessmentProgressComponent**: Renders the progress of various assessments (pending/completed) by fetching data from `assessment.json`.
  - **StudentAttendanceComponent**: Shows student attendance statistics from `student-attendance.json`.

Each component fetches its data through the `DataService`, which abstracts the data retrieval and error handling.

### 2. Service Layer (DataService)

The `DataService` is a centralized service responsible for:
- Fetching data from JSON files in the assets folder.
- Handling HTTP requests (if needed) and managing errors.
- Exposing observable data streams that the components subscribe to.

This layer promotes code reusability and separates data retrieval logic from the presentation layer.

### 3. Data Layer (assets/)

This layer consists of JSON files that store static data required by the components. These files are placed in the `assets` folder and organized as follows:

- **`assets/course-info.json`**: Contains data related to the course information, such as course code, name, type, etc.
- **`assets/assessment.json`**: Stores data on assessment progress, showing pending and completed percentages for each assessment type.
- **`assets/student-attendance.json`**: Holds data related to student attendance statistics, such as weekly attendance percentages.
