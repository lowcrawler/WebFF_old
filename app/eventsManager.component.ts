import { Component, OnInit }       	from '@angular/core';
import { EventService }		from './event.service';
import { EventsGridComponent } from './eventsGrid.component';

@Component ({
	selector: 
		'events-manager',
	templateUrl: 
		'./app/eventsManager.component.html',
	directives: [EventsGridComponent],
	providers: [EventService]
})


export class EventsManagerComponent implements OnInit  { 
	constructor(private _eventService:EventService) {}
	
	//public RAW = "BLAH!!";
	
	ngOnInit() {
		var allEventArray = this._eventService.getEvents();
		
		//this.RAW = allEventArray;
	
	}
	
}