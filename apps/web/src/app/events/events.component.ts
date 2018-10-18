import { Component, OnInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { events } from './events.data';

@Component({
  selector: 'dr-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  events = events;
  distanceColumns: string[] = ['Category', 'Distance', 'StartTime', 'Fee', 'Route'];

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
