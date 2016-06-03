import { Component, OnInit }       	from '@angular/core';
import {RouteSegment} from '@angular/router';
import { EventService }		from './event.service';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component ({
	templateUrl:
		'./app/viewEditEvent.component.html',
	providers: [EventService]
})


export class ViewEditEventComponent { //implements OnInit {

public eventID = "";
public eventData = "Loading...";
public eventPromise : Promise<Object>;
public testout:string;
testJSON : Object;
testArr: Array<any>;
@LocalStorage() public testLSString:string = '';
docs:Object;
/*[
	"eventID": "100",
	"eventDefaultDate": "2016-05-18",
	"stationID": "123456",
	"stationName": "Jordan MOCK",
	"totalNumContainers": "10"
}; */

 constructor(private params: RouteSegment, private _eventService:EventService){
	 this.testJSON = {
         id:123,
         placeId: 31,
         fb_id: 144423573684
       };
  }


  keys() : Array<string> {  // works, check here for better? http://stackoverflow.com/questions/31490713/iterate-over-typescript-dictionary-in-angular-2
    return Object.keys(this.testJSON);
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

	onTestingClick() {
		console.log("TEST!");
	 	var txt:string='{ "eventID": "100", "eventDefaultDate": "2016-05-18", "stationID": "123456" }';
		var jason:Object = JSON.parse(txt);
		console.log("eventID: " + jason['eventID'] + "  eventDate: " + jason['eventDefaultDate']);
		this.testout = JSON.stringify(jason);
	}

	onModifyVarClick() {
		this.testLSString = this.testLSString+"Changed";
	}

	onModifyLSClick() {
		localStorage.setItem('/testLSString', "RESET");
	}

}
