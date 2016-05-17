import { Component }       	from '@angular/core';
import { EventService }		from './event.service';

@Component ({
	selector: 
		'eventMgr',
	templateUrl: 
		'./app/eventManager.component.html',
	providers: [EventService],
})


export class EventManagerComponent  { //} implements OnInit{
	constructor(private eventService: EventService) {}

	// foo = 5;  // works
	foo = this.eventService.getEventList();
	
//	ngOnInit() {
//		console.log('OnInit->EventManger');
		//this.retts = this.eventService.getEventList();
//	}
	
}