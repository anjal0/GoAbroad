import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class AuthService {

  
  private _loginUrl = "http://localhost:5000/login";
  
  constructor(private http: HttpClient) { }


  loginUser(user:any){
    return this.http.post<any>('http://localhost:5000/login', user);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}