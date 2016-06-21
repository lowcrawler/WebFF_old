import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { EventsManagerComponent } from './eventsManager.component';
import { NewEventComponent } from './components/newEvent/newEvent.component';
import { ViewEditEventComponent } from './viewEditEvent.component';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'webff',
  templateUrl: './app/webff.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})

@Routes([
 // {path: '/', 						component: WebFieldForm}, //TODO - base 'instructions' or welcome screen, perhaps
  {path: '/events-manager',	component: EventsManagerComponent},
  {path: '/new-event',			component: NewEventComponent}, // TODO -- split out into types of new events?
 // {path: '*',				component: WebFieldForm},// TODO, need something for incorrect URLs ... this isn't good.  Technically still works, but console gives errors.
  {path: '/view-edit-event/:eventid',       component: ViewEditEventComponent}
])


export class WebFieldForm {


}
