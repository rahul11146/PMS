import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/IRole';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getAllDesignation(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'api/ClientStrive/GetAllDesignation'
    );
  }
}
