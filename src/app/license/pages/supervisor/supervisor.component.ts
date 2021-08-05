import { Component, OnInit } from '@angular/core';

import { Content } from './../../interfaces/license.interface';
import { LicenseDataService } from './../../services/license-data.service';
import { IReusableTable } from '../../interfaces/reusable-Table.interface';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {

  public dataLicense: Content[] = [];
  public columns: Array<IReusableTable> = [];
  public loader: boolean = true;


  // Como podria ahorrarme la repeticion de codigo?

  constructor(private LicenseDataService: LicenseDataService) { }

  ngOnInit(){
    this.buildHeaderTable()
    this.buildBodyTable()
  }

  buildHeaderTable(){
    this.columns = [
      { headerName: 'id Solicitud', field: 'id' },
      { headerName: 'Nombre', field: 'name' },
      { headerName: 'Apellido', field: 'surname' },
      { headerName: 'ID HR', field: 'tenant' },
      { headerName: 'CUIL', field: 'cuil' },
      { headerName: 'Licencia', field: 'typeLicense' },
      { headerName: 'Unidad Organizativa', field: 'workstation' },
      { headerName: 'Cargo', field: 'rol'},
      { headerName: 'Fecha de inicio', field: 'initDate' },
      { headerName: 'Fecha de fin', field: 'endingDate' },
      { headerName: 'Estado', field: 'gcbaLicenseStatus' },
    ]
  }

  buildBodyTable(){
    this.LicenseDataService.getData()
    .subscribe((res) => {
      this.dataLicense = res;

      // this.description = res.map((item: Content) :void => {
      //   item.organizationalUnits.map((item: OrganizationalUnit) :string => {
      //     return item.descriptionOU
      //   })
      // })
      
      this.loader = false
    }, (err) => {
      console.info(err);
    })
  }

}
