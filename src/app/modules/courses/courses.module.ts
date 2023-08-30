import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class CoursesModule { }