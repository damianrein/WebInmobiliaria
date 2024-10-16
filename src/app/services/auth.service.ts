import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "localhost:8080/auth";

  logged = false;

  constructor(private http: HttpClient) { }

  login(username: String, password: String):Observable<any>{
    this.logged = true;
    return this.http.post<any>('${this.apiUrl}/login',{username, password});
  }

  isLogged(){
    return this.logged;
  }

  logout(){
    this.logged = false;
  }
}
