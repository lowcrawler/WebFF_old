import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { EventManagerComponent } from './eventManager.component';
import { NewEventComponent } from './newEvent.component';

@Component({
  selector: 'webff',
  templateUrl: './app/webff.component.html',
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
 // {path: '/', 						component: WebFieldForm}, //TODO - base 'instructions' or welcome screen, perhaps
  {path: '/event-manager',	component: EventManagerComponent},
  {path: '/new-event',			component: NewEventComponent},
 // {path: '*',				component: WebFieldForm},// TODO, need something for incorrect URLs ... this isn't good.  Technically still works, but console gives errors.
  //{path: '/hero/:id',      component: HeroDetailComponent}
])


export class WebFieldForm { 
	

}