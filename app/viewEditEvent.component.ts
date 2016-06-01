import { Component, OnInit }       	from '@angular/core';
import {RouteSegment} from '@angular/router';
import { EventService }		from './event.service';


@Component ({
	templateUrl:
		'./app/viewEditEvent.component.html',
	providers: [EventService]
})


export class ViewEditEventComponent { //implements OnInit {

public eventID = "";
public eventData = {};

public testD = ['A','B','C'];
/*[
	"eventID": "100",
	"eventDefaultDate": "2016-05-18",
	"stationID": "123456",
	"stationName": "Jordan MOCK",
	"totalNumContainers": "10"
}; */

 constructor(private params: RouteSegment, private _eventService:EventService){

  }

  ngOnInit() {
		this.eventID = this.params.getParam('eventid');
		var returnedEvent = this._eventService.getEvent(this.eventID);
		// PROBABLY NEED TO DO ALL THIS IN THE RESOLVING OF THE PROMISE...  LIKELY ASK FOR PROMISE IN INIT AND RESOLVE LATER
		console.log("ONINIT: " + returnedEvent);
		this.eventData = JSON.stringify(returnedEvent); // TODO, probably need to have this be a promise or something in case it has to pull from something slow


  }
}
