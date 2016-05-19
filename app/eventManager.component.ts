import { Component }       	from '@angular/core';
import { EventService }		from './event.service';
import { EventGridComponent }		from './eventGrid.component';

@Component ({
	selector: 
		'eventMgr',
	templateUrl: 
		'./app/eventManager.component.html',
	directives: [EventGridComponent],
	providers: [EventService]
})


export class EventManagerComponent  { //} implements OnInit{

}