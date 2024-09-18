import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseEvaluationService {

  constructor(private http: HttpClient) { }
  
  private courseJsonUrl = "assets/course-details.json";

  getCourseDetails(): Observable<any> {
    return this.http.get(this.courseJsonUrl);
  }
}
