import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/IRole';
import { ClientProject } from '../model/class/ClientProject';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class ClientProjectService {
  constructor(private http: HttpClient) {}

  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'api/ClientStrive/GetAllClientProjects'
    );
  }

  addUpdateClientProject(obj: ClientProject): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + 'api/ClientStrive/AddUpdateClientProject',
      obj
    );
  }

  deleteProjectByProjectId(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      environment.API_URL +
        'api/ClientStrive/DeleteProjectByProjectId?projectId=' +
        id
    );
  }
}
