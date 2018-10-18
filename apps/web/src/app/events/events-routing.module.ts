import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
// import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'dr.menu.events' }
  }
  // {
  //   path: 'features',
  //   component: FeaturesComponent,
  //   data: { title: 'dr.menu.features' }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
