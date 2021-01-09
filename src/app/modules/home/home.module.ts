import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { BookContainerComponent } from './components/book-container/book-container.component';


@NgModule({
  declarations: [HomePageComponent, BookDetailPageComponent, BookContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
