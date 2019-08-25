import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegProvePage } from './reg-prove';

@NgModule({
  declarations: [
    RegProvePage,
  ],
  imports: [
    IonicPageModule.forChild(RegProvePage),
  ],
})
export class RegProvePageModule {}
