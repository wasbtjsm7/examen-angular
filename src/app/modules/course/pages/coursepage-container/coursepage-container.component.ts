import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../interfaces/icourse';
import { CourseeService } from '../../services/course.service.service';

@Component({
  selector: 'app-coursepage-container',
  templateUrl: './coursepage-container.component.html',
  styleUrls: ['./coursepage-container.component.scss']
})
export class CoursepageContainerComponent implements OnInit {

  listCurso: ICurso[];

  constructor(private instserv: CourseeService) { }

  ngOnInit(): void {
    this.getcurso();
  }
  getcurso(): any{
    this.instserv.getCurso()
     .subscribe((res: ICurso[]) => {
       console.log(res);
       
       this.listCurso = res;
     });
 }

}
