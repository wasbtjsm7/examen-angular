import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherContainerComponent } from './components/teacher-container/teacher-container.component';
import { TopcourseContainerComponent } from './components/topcourse-container/topcourse-container.component';
import { InstructorService } from './services/instructor.service';


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
  ],
  providers:[InstructorService]
})
export class HomeModule { }
