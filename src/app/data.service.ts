import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/countries`);
  }

  getSkills(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/skills`);
  }
}
