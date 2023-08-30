import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesListModule } from './modules/courses-list/courses-list.module';
import { CoursesModule } from './modules/courses/courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	AuthenticationModule,
	CoursesListModule,
	CoursesModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
