import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToasterPage } from './toaster';

@NgModule({
  declarations: [
    ToasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ToasterPage),
  ],
})
export class ToasterPageModule {}
