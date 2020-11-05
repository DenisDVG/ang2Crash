import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit {
  courses: string[];
  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit(): void {}
}
