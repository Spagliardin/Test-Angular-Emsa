import { Content, OrganizationalUnit } from './../../interfaces/license.interface';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { IReusableTable } from './../../interfaces/reusable-Table.interface';
import { LicenseDataService } from './../../services/license-data.service';

@Component({
  selector: 'app-medicina-laboral',
  templateUrl: './medicina-laboral.component.html',
  styleUrls: ['./medicina-laboral.component.scss']
})
export class MedicinaLaboralComponent implements OnInit {

  public dataLicense: Content[] = []
  public columns: Array<IReusableTable> = [];
  public loader: boolean = true;
  public description: string | any = ''



  constructor(private LicenseDataService: LicenseDataService) {
   }
  

  ngOnInit(){
    this.buildHeaderTable()
    this.buildBodyTable()
  }

  buildHeaderTable(){
    this.columns = [
      { headerName: 'id solicitud', field: 'id' },
      { headerName: 'Nombre', field: 'name' },
      { headerName: 'Apellido', field: 'surname' },
      { headerName: 'ID HR', field: 'tenant' },
      { headerName: 'CUIL', field: 'cuil' },
      { headerName: 'Licencia', field: 'typeLicense' },
      { headerName: 'Unidad Organizativa', field: 'workstation' },
      { headerName: 'Cargo', field: 'rol' },
      { headerName: 'Fecha de Inicio', field: 'initDate' },
      { headerName: 'Fecha de fin', field: 'endingDate' },
      { headerName: 'Estado', field: 'gcbaLicenseStatus' },
      { headerName: 'Diagnostico Medico', field: 'medicDiagnostic' },
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
