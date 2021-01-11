import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherContainerComponent } from './components/teacher-container/teacher-container.component';
import { TopcourseContainerComponent } from './components/topcourse-container/topcourse-container.component';


@NgModule({
declarations: [
    HomepageComponent, 
    HeaderComponent, 
    TeacherComponent, 
    TeacherContainerComponent, 
    TopcourseContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
