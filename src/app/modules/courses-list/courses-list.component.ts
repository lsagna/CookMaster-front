import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {

  coursesList = [] as Course[];
  constructor(
	private readonly coursesService: CoursesService,
	private readonly router: Router
  ) { }

  ngOnInit(): void {
	this.coursesService.getAllCourses().subscribe({
		next: (value: Course[]) => {
			this.coursesList = value;
		}
	});
  }

  onCourseClick(course: Course) {
	const route = `/courses/${course.id}`;
	this.router.navigate([route], { state: { id: course.id }})
  }

}
