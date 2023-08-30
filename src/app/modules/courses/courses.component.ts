import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  currentCourse = {} as Course;
  constructor(
	private readonly coursesService: CoursesService,
	private readonly router: Router
	) {
		const nav: Navigation = this.router.getCurrentNavigation()!;
		if (nav.extras && nav.extras.state && nav.extras.state['id']) {
			this.coursesService.getCourse(nav.extras.state['id']).subscribe({
				next: (result: Course) => {
					this.currentCourse = result;
				},
				error: (error) => {
					console.error(error);
				}
			})
		}
		else {
			const url = this.router.url;
			const id = Number(url.substring(url.length - 1));
			this.coursesService.getCourse(id).subscribe({
				next: (result: Course) => {
					this.currentCourse = result;					
				},
				error: (error) => {
					console.error(error);
				}
			})
		}
	}

  ngOnInit(): void {
  }

}
