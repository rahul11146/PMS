import { Component, OnInit } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent implements OnInit {
  isRole: boolean = false;
  isDesignation: boolean = false;

  ngOnInit(): void {
    this.showList('Role');
  }

  showList(vType: string) {
    if (vType == 'Role') {
      this.isRole = true;
      this.isDesignation = false;
    } else if (vType == 'Desig') {
      this.isDesignation = true;
      this.isRole = false;
    }
  }
}
