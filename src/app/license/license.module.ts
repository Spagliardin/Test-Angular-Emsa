import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinaLaboralComponent } from './pages/medicina-laboral/medicina-laboral.component';
import { SupervisorComponent } from './pages/supervisor/supervisor.component';
import { RouterModule } from '@angular/router';
import { ReusableTableComponent } from '../shared/reusable/table/reusable-table.component';
import { LoadingComponent } from '../shared/reusable/loading/loading.component';
import { LicenseDetailComponent } from './pages/license-detail/license-detail.component';




@NgModule({
  declarations: [
    MedicinaLaboralComponent,
    SupervisorComponent,
    ReusableTableComponent,
    LoadingComponent,
    LicenseDetailComponent
  ],
  exports: [
    MedicinaLaboralComponent,
    SupervisorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LicenseModule { }
