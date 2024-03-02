import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private _http = inject(HttpClient);
  private urlBase = 'https://api.github.com/users';
  buscarUsuario(username: string): Observable<any> {
    return this._http.get(`${this.urlBase}/${username}`);
  }
  procesarDatosGithub(data: any): any {
    return {
      nombre: data.name,
      img: data.avatar_url,
      followers: data.followers,
      following: data.following,
      admin: data.site_admin,
      enlace: data.html_url
    }
  }
  constructor() { }
}
