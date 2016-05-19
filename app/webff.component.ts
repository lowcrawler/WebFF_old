import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { EventsManagerComponent } from './eventsManager.component';
import { NewEventComponent } from './newEvent.component';
import { ViewEditEventComponent } from './viewEditEvent.component';

@Component({
  selector: 'webff',
  templateUrl: './app/webff.component.html',
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
 // {path: '/', 						component: WebFieldForm}, //TODO - base 'instructions' or welcome screen, perhaps
  {path: '/events-manager',	component: EventsManagerComponent},
  {path: '/new-event',			component: NewEventComponent}, // TODO -- split out into types of new events?
 // {path: '*',				component: WebFieldForm},// TODO, need something for incorrect URLs ... this isn't good.  Technically still works, but console gives errors.
  {path: '/view-edit-event/:eventid',      component: ViewEditEventComponent}
])


export class WebFieldForm { 
	

}