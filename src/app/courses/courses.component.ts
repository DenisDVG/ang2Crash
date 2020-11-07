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
  emailTwo = 'email2@way.com';
  emailThree = 'email3@way.com';
  textPipe = `start wwwwwww wwwwwwwwwwwww wwwww
  wwwwee 132132 eresrergdfdf dfgd sdsdsd  sdsdfsfeeeeee and`;
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
  onKeyUpFilterEnter($event): void {
      console.log($event.target.value);
  }
  onKeyUpBindInputVal(email: string): void{
    console.log(email);
  }
  onKeyUpTwoWayBindInputVal(): void{
    console.log(this.emailTwo);
  }
  onKeyUpTwoWayBindNGModelInputVal(): void{
    console.log(this.emailThree);
  }
  ngOnInit(): void {}
}
