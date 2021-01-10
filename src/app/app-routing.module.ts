import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from './layout/layout.component'

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: ()=> import('./modules/home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'course',
        loadChildren: ()=> import('./modules/course/course.module').then( m => m.CourseModule)
      },
      {
        path: 'contacts',
        loadChildren: ()=> import('./modules/contacts/contacts.module').then( m => m.ContactsModule)
      },
      {
        path: 'admin',
        loadChildren: ()=> import('./modules/admin/admin.module').then( m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
