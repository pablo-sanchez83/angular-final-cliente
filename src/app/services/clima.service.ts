import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ClimaService {
    // Inyección del HttpClient para realizar peticiones HTTP
    private _http = inject(HttpClient);
  
    // URL base de la API de OpenWeatherMap
    private urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  
    // Clave de la API de OpenWeatherMap
    private apiKey = '605507acf87117e111e54a3ab5238541';
  
    // Diferencia en grados Kelvin para convertir la temperatura de Kelvin a Celsius
    private difKelvin = 273.15;
  
    // Método para buscar el clima de una ciudad
    buscarClima(ciudad: string): Observable<any> {
      // Realiza una petición GET a la API de OpenWeatherMap para obtener el clima de la ciudad
      return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`);
    }
  
    // Método para procesar los datos del clima obtenidos de la API
    procesarDatosClima(data: any): any {
      return {
        ciudadNombre: data.name,
        paisNombre: data.sys.country,
        temperatura: Math.floor(data.main.temp - this.difKelvin),
        humedad: data.main.humidity,
        descripcion: data.weather[0].description,
        icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      };
    }
  }
  