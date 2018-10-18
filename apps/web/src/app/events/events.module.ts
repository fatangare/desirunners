import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '@app/shared';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    SharedModule,
    EventsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLhOnjcggY2xfceP_V_bPgdDT1tMunIEU'
    })],
  declarations: [EventsComponent]
})
export class EventsModule {}
