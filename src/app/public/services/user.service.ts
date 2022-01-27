import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpint = '/api/users';
  constructor(
    private http: HttpClient
  ) {
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.endpint)
  }
}
