import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  // Inyección del HttpClient para realizar peticiones HTTP
  private _http = inject(HttpClient);

  // Parámetros para la URL de la API de Cataas
  private params : string = '?type=square&fit=cover&position=centre&width=500&height=500';

  // ID del gato obtenido de la API
  private idCat : string = '';

  // URL base para obtener un gato de la API de Cataas
  private urlBase: string = `https://cataas.com/cat${this.params}&html=false&json=true`;

  // URL completa del gato obtenido de la API
  private urlCat: string = '';

  // Método para obtener un gato de la API
  getCat(): Observable<any> {
    return this._http.get(this.urlBase);
  }

  // Método para procesar los datos del gato obtenidos de la API
  processCat(data: any): any {
    this.idCat = data._id;
    this.urlCat = `https://cataas.com/cat/${this.idCat}${this.params}`
    return this.urlCat;
  }

  constructor() { }
}
