import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // URL base del servidor API
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para obtener usuarios
  getUsuarios(page: number, perPage: number): Observable<any> {
    // Realiza una petición GET a la API para obtener los usuarios
    // Los parámetros de la página y la cantidad por página se pasan en la URL
    return this.http.get(`${this.baseUrl}/usuarios?page=${page}&perPage=${perPage}`);
  }

  // Método para borrar un usuario
  deleteUsuario(id: number): Observable<any> {
    // Realiza una petición DELETE a la API para borrar un usuario
    // El ID del usuario a borrar se pasa en la URL
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }

  // Método para crear un usuario
  createUsuario(usuario: any): Observable<any> {
    // Realiza una petición POST a la API para crear un usuario
    // Los datos del usuario se pasan en el cuerpo de la petición
    return this.http.post(`${this.baseUrl}/usuarios`, usuario);
  }
}
