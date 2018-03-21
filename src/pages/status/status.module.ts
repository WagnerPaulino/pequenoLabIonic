import { StatusNotificacionPage } from './status-notificacion/status-notificacion';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';

@NgModule({
  declarations: [
    StatusPage,
    StatusNotificacionPage
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
  entryComponents:[
    StatusNotificacionPage
  ]
})
export class StatusPageModule {}
