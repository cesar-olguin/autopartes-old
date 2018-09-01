import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarcoincidencePage } from './carcoincidence';

@NgModule({
  declarations: [
    CarcoincidencePage,
  ],
  imports: [
    IonicPageModule.forChild(CarcoincidencePage),
  ],
})
export class CarcoincidencePageModule {}
