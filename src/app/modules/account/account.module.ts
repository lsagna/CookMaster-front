import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
	MaterialModule,
	FormsModule,
	ReactiveFormsModule
  ]
})
export class AccountModule { }
