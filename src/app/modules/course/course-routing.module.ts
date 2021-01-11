import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CoursepageContainerComponent } from './pages/coursepage-container/coursepage-container.component';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';

const routes: Routes = [
  {
    path: '',
    component: CoursepageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
