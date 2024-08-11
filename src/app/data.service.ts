import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getDomains(): Observable<any> {
    return this.http.get('/assets/data/domains.json');
  }

  getArticles(): Observable<any> {
    return this.http.get('/assets/data/articles.json');
  }

  searchArticles(term: string): Observable<any> {
    // In a real application, this would be an API call
    return this.http.get(`/api/search?q=${term}`);
  }
}