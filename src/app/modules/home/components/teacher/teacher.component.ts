import { Component, Input, OnInit } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  @Input() teacher: IInstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
