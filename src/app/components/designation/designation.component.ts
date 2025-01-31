import { Component, OnInit, inject } from '@angular/core';
import { APIResponseModel, IDesignation } from '../../model/interface/IRole';
import { ClientService } from '../../services/client.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];

  commonService = inject(CommonService);

  ngOnInit(): void {
    this.getAllDesignation();
  }

  getAllDesignation() {
    this.commonService
      .getAllDesignation()
      .subscribe((res: APIResponseModel) => {
        this.designationList = res.data;
        console.log(this.designationList);
      });
  }
}
