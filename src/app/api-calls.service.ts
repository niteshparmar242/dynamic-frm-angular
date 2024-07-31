
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}
  private scrollBottomSubject = new BehaviorSubject<boolean>(false);
  scrollBottom$ = this.scrollBottomSubject.asObservable();

  notifyScrollBottom(isBottom: boolean): void {
    this.scrollBottomSubject.next(isBottom);
  }
  getCountries(): Observable<string[]> {
    return this.http.get<string[]>('/api/countries');
  }

  getSkills(page: number = 1, limit: number = 10): Observable<string[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<string[]>('/api/skills', { params });
  }

  getStructure(): Observable<any[]> {
    return this.http.get<any[]>('/api/structure');
  }

  getUsers(limit: number, skip: number, apiUrl?:any): Observable<any> {
    let apiSubs = apiUrl ?? 'https://dummyjson.com/users'
    return this.http.get<any>(`${apiSubs}?limit=${limit}`);
  }
  searchUsers(query: string, limit: number, apiUrl?:any): Observable<any> {
     let apiSubs = apiUrl ?? 'https://dummyjson.com/users'
    return this.http.get<any>(`${apiSubs}/search?q=${query}&limit=${limit}`);
  }

}
