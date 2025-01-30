import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEmployee } from '../../model/interface/IEmployee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  empList: IEmployee[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee'
      )
      .subscribe((res: any) => {
        this.empList = res.data;
        console.log(this.empList);
      });
  }
}
