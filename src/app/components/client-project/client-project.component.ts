import { Component, inject, OnInit } from '@angular/core';
import { ClientProjectService } from '../../services/client-project.service';
import { ClientProject } from '../../model/class/ClientProject';
import { APIResponseModel } from '../../model/interface/IRole';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  clientProjectObj: ClientProject = new ClientProject();
  ClientProjectList: ClientProject[] = [];
  ClientProjectSer = inject(ClientProjectService);

  ngOnInit(): void {
    this.loadClientProject();
  }

  loadClientProject() {
    this.ClientProjectSer.getAllClientProject().subscribe(
      (res: APIResponseModel) => {
        this.ClientProjectList = res.data;
        console.log(this.ClientProjectList);
      }
    );
  }
}
