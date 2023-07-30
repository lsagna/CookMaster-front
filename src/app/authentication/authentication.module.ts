import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationComponent } from './authentication.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
	FormsModule,
	ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
