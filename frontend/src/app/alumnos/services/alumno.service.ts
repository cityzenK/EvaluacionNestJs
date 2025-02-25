import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configLoader } from '../../config/config-loader';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor(private http: HttpClient) {}
  private URL = configLoader().URL;
  private headers = new HttpHeaders(configLoader().keyHedaer);

  public getAlumnos(id: Number): Observable<[]> {
    const uriConsulta = `${this.URL}/consultar-alumno/${id}`;
    return this.http
      .get<[]>(uriConsulta, { headers: this.headers })
      .pipe((res) => res);
  }
}
