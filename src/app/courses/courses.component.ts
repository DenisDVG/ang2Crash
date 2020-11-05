import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit {
  courses: string[];
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
  onSave($event): void {
    $event.stopPropagation();
    console.log('Btn onSave was clicked', $event);
  }
  onDivAfterSave(): void {
    console.log('onDivAfterSave');
  }
  onKeyUpFilterEnter(): void {
      console.log('Enter was pressed');
  }
  ngOnInit(): void {}
}
