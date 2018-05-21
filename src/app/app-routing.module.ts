import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StationsComponent} from './stations/stations.component';
import {GestionstationsComponent} from './gestionstations/gestionstations.component';

const routes: Routes = [
  { path: 'stations', component: StationsComponent },
  { path: 'gestionstations', component: GestionstationsComponent },
  { path: '', redirectTo: '/stations', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}