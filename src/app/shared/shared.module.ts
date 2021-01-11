import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ViewcourseComponent } from './components/viewcourse/viewcourse.component';

@NgModule({
  declarations: [ViewcourseComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
