import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  // Inyección del HttpClient para realizar peticiones HTTP
  constructor(private http:HttpClient) { }

  // Método para obtener una lista de fotos
  getPhoto():Observable<any>{
    // Realiza una petición GET a la API de Picsum para obtener una lista de fotos
    return this.http.get("https://picsum.photos/v2/list");
  }
}
