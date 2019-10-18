import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get<User[]>(`/users`);
  }

  register(user: User): any {
    return this.http.post(`/users/register`, user);
  }

  delete(id: number): any {
    return this.http.delete(`/users/${id}`);
  }
}
