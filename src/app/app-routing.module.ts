import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseDetailComponent } from './license/pages/license-detail/license-detail.component';

import { MedicinaLaboralComponent } from './license/pages/medicina-laboral/medicina-laboral.component';
import { SupervisorComponent } from './license/pages/supervisor/supervisor.component';



const routes: Routes = [

  {
    path: '',
    component: MedicinaLaboralComponent,
    pathMatch: 'full',
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  },
  {
    path: 'license/:id',
    component: LicenseDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
   exports: [
     RouterModule
   ]

})
export class AppRoutingModule { }
