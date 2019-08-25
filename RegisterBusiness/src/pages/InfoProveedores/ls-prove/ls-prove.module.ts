import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LsProvePage } from './ls-prove';

@NgModule({
  declarations: [
    LsProvePage,
  ],
  imports: [
    IonicPageModule.forChild(LsProvePage),
  ],
})
export class LsProvePageModule {}
