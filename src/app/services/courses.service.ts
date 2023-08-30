import { Injectable } from '@angular/core';
import { CoursesController } from '../controllers/courses.controller';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private readonly coursesController: CoursesController) { }

  public getAllCourses(): Observable<Course[]> {
	return this.coursesController.getAllCourses();
  }

  public getCourse(id: number): Observable<Course> {
	return this.coursesController.getCourse(id);
  }
}
