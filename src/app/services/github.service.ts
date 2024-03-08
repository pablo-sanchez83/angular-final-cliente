import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // Inyección del HttpClient para realizar peticiones HTTP
  private _http = inject(HttpClient);

  // URL base de la API de Github
  private urlBase = 'https://api.github.com/users';

  // Método para buscar un usuario en Github
  buscarUsuario(username: string): Observable<any> {
    // Realiza una petición GET a la API de Github para obtener los datos del usuario
    return this._http.get(`${this.urlBase}/${username}`);
  }

  // Método para procesar los datos del usuario obtenidos de la API de Github
  procesarDatosGithub(data: any): any {
    return {
      nombre: data.login,
      img: data.avatar_url,
      followers: data.followers,
      following: data.following,
      admin: data.site_admin,
      enlace: data.html_url
    };
  }

  constructor() { }
}
