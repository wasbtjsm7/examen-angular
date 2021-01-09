import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
