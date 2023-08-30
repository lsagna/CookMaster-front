import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
	MaterialModule
  ]
})
export class CoursesListModule { }
