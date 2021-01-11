import { Component, OnInit } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-teacher-container',
  templateUrl: './teacher-container.component.html',
  styleUrls: ['./teacher-container.component.scss']
})
export class TeacherContainerComponent implements OnInit {

  listInstructor: IInstructor[];

  constructor(private instserv: InstructorService) { }

  ngOnInit(): void {
    this.getinstructor();
  }

  getinstructor(){
     this.instserv.getinstructor()
      .subscribe((res: IInstructor[]) => {
        console.log(res);
        
          this.listInstructor = res;
      });
  }

}

