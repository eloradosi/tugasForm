import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/commonxng/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Gantilah dengan URL API sesuai kebutuhan

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post(${this.apiUrl}/submit-form, data);
  }
}