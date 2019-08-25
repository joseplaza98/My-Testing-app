import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroProveedorPage } from './registro-proveedor';

@NgModule({
  declarations: [
    RegistroProveedorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroProveedorPage),
  ],
})
export class RegistroProveedorPageModule {}
