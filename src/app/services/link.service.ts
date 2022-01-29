import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../interfaces/links.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  endpoint=  'api/users/';
  constructor(
    private http: HttpClient
  ) { }

  getUserLinks(userId: number): Observable<Link[]> {
    return this.http.get<Link[]>(`${this.endpoint}/${userId}/links`);
  }
}
