import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private _http = inject(HttpClient);
  private params : string = '?type=square&fit=cover&position=centre&width=500&height=500';
  private idCat : string = '';
  private urlBase: string = `https://cataas.com/cat${this.params}&html=false&json=true`;
  private urlCat: string = '';
  getCat(): Observable<any> {
    return this._http.get(this.urlBase);
  }
  processCat(data: any): any {
    this.idCat = data._id;
    this.urlCat = `https://cataas.com/cat/${this.idCat}${this.params}`
    return this.urlCat;
  }
  constructor() { }
}
