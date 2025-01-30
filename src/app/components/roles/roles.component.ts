import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../model/interface/IRole';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get(environment.API_URL + 'api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
        console.log(this.roleList);
      });
  }
}
