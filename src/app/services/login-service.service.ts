import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  onLogin(obj: any): Observable<any> {
    console.log('inside service');
    return this.http.post<any>(environment.CURR_API_URL + 'api/Login', obj);
  }
}
