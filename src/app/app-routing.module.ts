import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { CoursesListComponent } from './modules/courses-list/courses-list.component';
import { CoursesComponent } from './modules/courses/courses.component';

const routes: Routes = [
	{
		path: 'auth',
		component: AuthenticationComponent,
	},
	{
		path: 'courses',
		component: CoursesListComponent,
	},
	{
		path: 'courses/:courseId',
		component: CoursesComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
