import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = "/localhost:8080/";
  
  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }
}
