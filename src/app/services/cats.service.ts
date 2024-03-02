import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://cataas.com/cat?type=square&fit=cover&position=centre&width=500&height=500';
  getCats(): Observable<any> {
    return this._http.get(this.urlBase);
  }
  constructor() { }
}
