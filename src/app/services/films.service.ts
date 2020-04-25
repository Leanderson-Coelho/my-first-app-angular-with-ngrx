import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  API: string = environment.API;

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(this.API + 'films');
  }
}
