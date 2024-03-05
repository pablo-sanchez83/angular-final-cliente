import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Usuario } from '../../interfaces';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  
  // Used to make a GET request to the API
  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url) as Observable<T>;
  }

  // Used to make a POST request to the API
  post<T>(url: string, body: Usuario, options: Options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  // Used to make a PUT request to the API
  put<T>(url: string, body: Usuario, options: Options): Observable<T> {
    return this.httpClient.put<T>(url, body, options) as Observable<T>;
  }

  // Used to make a DELETE request to the API
  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url) as Observable<T>;
  }
}