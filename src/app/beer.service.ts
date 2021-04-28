import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private baseUrl = 'http://localhost:8080/api/v1/beers';

  constructor(private http: HttpClient) { }

  getBeers() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBeer(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getBeerByName(name: string) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  createBeer(beer: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, beer);
  }

  updateBeer(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBeer(id:number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: "text"});
  }

  incrementQty(id: number, quantity: number) : Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}/increment`, quantity);
  }

  decrementQty(id: number, quantity: number) : Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${id}/decrement`, quantity);
  }
}
