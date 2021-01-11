import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CourseCategoryComponent } from './components/course-category/course-category.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CoursedetailpageComponent } from './pages/coursedetailpage/coursedetailpage.component';
import { CoursepageContainerComponent } from './pages/coursepage-container/coursepage-container.component';


@NgModule({
  declarations: [CoursepageComponent, 
    CourseCategoryComponent, 
    CourseContainerComponent, 
    CoursedetailpageComponent, 
    CoursepageContainerComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
