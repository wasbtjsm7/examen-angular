import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from '../interfaces/icourse';

@Injectable({
  providedIn: 'root'
})
export class CourseeService {
  url = 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';

  constructor(private http: HttpClient) { 

  }

  getCurso() {
    return this.http.get<ICurso[]>(`${this.url}`);
  }

}
