import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CoursesService {
  getCourses(): string[] {
    return ['course 1', 'course 2', 'course 3', ];
  }
  constructor() { }
}
