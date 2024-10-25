import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TutoringService extends BaseService<any> {

  constructor() {
    super();

    this.resourceEndPoint = '/tutorings';
  }


  getCourses(): Observable<any> {
    this.resourceEndPoint = '/courses';
    return this.http.get(this.resourcePath());
  }

  // Obtener tutoría por courseId (para el detalle del curso)
  getTutoringByCourseId(courseId: number): Observable<any> {
    this.resourceEndPoint = '/tutorings';
    return this.http.get(`${this.resourcePath()}?courseId=${courseId}`);
  }


  getCoursesBySemester(cycle: number): Observable<any> {
    this.resourceEndPoint = '/courses';
    return this.http.get(`${this.resourcePath()}?cycle=${cycle}`);
  }


  getTutorById(tutorId: number): Observable<any> {
    this.resourceEndPoint = '/tutors';
    return this.http.get(`${this.resourcePath()}/${tutorId}`);
  }
}
