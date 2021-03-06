import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationStudentComponent } from './courses/registration-student/registration-student.component';
import { ListComponent } from './admin/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RegisterStudentComponent,
    LoginComponent,
    RegisterTeacherComponent,
    CoursesComponent,
    RegistrationStudentComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
