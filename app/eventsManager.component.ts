import { Component }       	from '@angular/core';
import { EventService }		from './services/event.service';
import { EventsGridComponent } from './eventsGrid.component';

@Component ({
	selector:
		'events-manager',
	templateUrl:
		'./app/eventsManager.component.html',
	directives: [EventsGridComponent],
	providers: [EventService]
})


export class EventsManagerComponent  {
	constructor(private _eventService:EventService) {}

}
