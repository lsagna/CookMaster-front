import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";

@Injectable({
	providedIn: 'root',
})
export class CoursesController {
	private url = `http://localhost:3000/courses`;

	constructor(private readonly http: HttpClient) {}

	public getAllCourses(): Observable<Course[]> {
		return this.http.get<Course[]>(`${this.url}`);
	}

	public getCourse(id: number): Observable<Course> {
		return this.http.get<Course>(`${this.url}/${id}`);
	}

}
