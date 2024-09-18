import { Component, OnInit } from '@angular/core';
import { CourseEvaluationService } from '../course-evaluation.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  
  courseDetails: any = {};
  constructor(private courseEvaluationService:CourseEvaluationService){}
  
  ngOnInit(): void {
    this.fetchCourseDetails();
  }

  fetchCourseDetails() {
    this.courseEvaluationService.getCourseDetails().subscribe(
      (data) => {
        this.courseDetails = data;
      },
      (error) => {
        console.error('Error fetching course details', error);
      }
    );
  }
}
