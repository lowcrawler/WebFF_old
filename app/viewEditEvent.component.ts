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
public eventData = "Loading...";
public eventPromise : Promise<Object>;
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
		this.eventPromise = this._eventService.getEvent(this.eventID);
		// PROBABLY NEED TO DO ALL THIS IN THE RESOLVING OF THE PROMISE...  LIKELY ASK FOR PROMISE IN INIT AND RESOLVE LATER
		this.eventPromise.then(returnedData => {
			console.log("RETURNEDDATA: " + returnedData['eventID'] + returnedData['stationName']);
			console.log(this.eventData);
			this.eventData = JSON.stringify(returnedData);
		});
	}


}
