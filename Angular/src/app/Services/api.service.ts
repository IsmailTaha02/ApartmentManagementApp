import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:5000/users'; // Flask API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
  
}