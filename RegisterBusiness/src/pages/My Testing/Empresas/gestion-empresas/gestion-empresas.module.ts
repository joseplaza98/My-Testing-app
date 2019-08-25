import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionEmpresasPage } from './gestion-empresas';

@NgModule({
  declarations: [
    GestionEmpresasPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionEmpresasPage),
  ],
})
export class GestionEmpresasPageModule {}
