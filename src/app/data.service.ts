import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  createCustumer(data){
    return this.http.post(`${environment.apiUrl}v1/account`, data);
  }

  auth(data: any) {
    return this.http.post(`${environment.apiUrl}v1/account/login`, data);
  }

  getContatos(){
    return this.http.get(`${environment.apiMockonUrl}/contatos`);
  }

  getContato(contato: string){
    return this.http.get(`${environment.apiMockonUrl}/contatos/${contato}`);
  }

  resetPassord(data: any) {
    return this.http.post(`${environment.apiMockonUrl}/contatos/resetpassword`, data);
  }

  createContato(data){
    return this.http.post(`${environment.apiMockonUrl}/contato/`, data);
  }

}
