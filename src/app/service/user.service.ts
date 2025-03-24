import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, Register } from '../Model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = "https://projectapi.gerasim.in/api/RfqTracker/Register";

  constructor(private http: HttpClient) {}

  onRegister(obj: Register):Observable<IApiResponse> {
    return this.http.post<IApiResponse>(this.API, obj);  // Return the observable
  }
}
