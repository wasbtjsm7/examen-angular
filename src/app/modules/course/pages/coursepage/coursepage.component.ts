import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../interfaces/icourse';


@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.scss']
})
export class CoursepageComponent implements OnInit {

  @Input() cursoname: ICurso;

  constructor() { }

  ngOnInit(): void {
  }

}
