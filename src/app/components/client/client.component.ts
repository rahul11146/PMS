import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/IRole';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);
  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client added successfully');
          this.clientObj = new Client();
        } else {
          alert('error');
        }

        this.loadClient();
      });
  }

  onEditClient(clientObj: Client) {
    this.clientObj = clientObj;
  }

  onDeleteClient(id: number) {
    const isDelete = confirm('Are you sure \n you want to delete ??');
    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: APIResponseModel) => {
          if (res.result) {
            alert('Client deleted successfully');
          } else {
            alert('error');
          }
          this.loadClient();
        });
    }
  }
}
