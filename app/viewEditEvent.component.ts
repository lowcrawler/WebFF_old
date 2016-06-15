import { Component, OnInit }       	from '@angular/core';
import {RouteSegment} from '@angular/router';
import {EventService}	from './services/event.service';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
import {USGSEvent} from "./classes/USGSEvent.class";

@Component ({
	templateUrl:
		'./app/viewEditEvent.component.html',
	providers: [EventService]
})


export class ViewEditEventComponent { //implements OnInit {
//TODO - clean up code, lots of testing going on...
public eventID = "";
public eventData = "Loading...";
public eventPromise : Promise<Object>;
public testout:string;
testJSON : Object;
testArr: Array<any>;
@LocalStorage() public testLSString:string = '';
docs:Object;
errorMessage: string;
httpTestEvents: Array<any>;//TODO: array of events
testArray : Array<any> = ['A','B','C'];
eventInfo:JSON;
public event : USGSEvent;

 constructor(private params: RouteSegment, private _eventService:EventService){
	 this.testJSON = {
         id:123,
         placeId: 31,
         fb_id: 144423573684
       };
  }


  keys(obj) : Array<string> {  // works, check here for better? http://stackoverflow.com/questions/31490713/iterate-over-typescript-dictionary-in-angular-2
    return Object.keys(obj);
  }

	isDisplayable(obj):Boolean {
		if(typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'string') {
			return true;
		}
	}

	ngOnInit() {
		console.log("viewEditEvent.component(ngOnInit)");
		this.eventID = this.params.getParam('eventid'); //TODO: need to work off event GUID
		this._eventService.getEvents('eventID', this.eventID)
			.subscribe(
				events => {
					if(events.length==0) {  // todo - If zero are returned, this code never runs because there is nothing to 'subscribe' to
						console.error("No events were returned");
					}
					if(events.length>1) {
						alert("More than one event was returned for this page.  This is potentially a serious error.  Press F12 to view the console and send the error to jfederer@usgs.gov \n\nProceeding may risk your data.");
						console.error("More than one event was returned for " + this.eventID);
					}
					this.event = events[0];
					this.eventData = JSON.stringify(this.event);
					this.eventInfo = this.event.getEventData();

				},
				error =>  {
					this.errorMessage = <any>error;
					alert("ERROR!!");   // todo - This doesn't appear to work.  Go to URL that doesn't contain an event and a real error occurs.
				});
	}

	onTestHTTPClick() {
		console.log("onTestHTTPClick()");
		this._eventService.getHTTPEvents()
			.subscribe(
				httpTestEvents => {
							 this.httpTestEvents = httpTestEvents;
							 console.log(httpTestEvents);
							 },
						 	error =>  this.errorMessage = <any>error);

	}

	onTestJSONParseStringifyClick() {
		console.log("onTestJSONParseStringifyClick()");
	 	var txt:string='{ "eventID": "100", "eventDefaultDate": "2016-05-18", "stationID": "123456" }';
		var jason:Object = JSON.parse(txt);
		this.testout = JSON.stringify(jason);
	}

	onModifyVarClick() {
		this.testLSString = this.testLSString+"Changed";
	}

	onModifyLSClick() {
		localStorage.setItem('/testLSString', "RESET");
	}

	onArrayTestClick() {
		console.log("Test Array Clicked");
		//this.testArray.forEach(this.arrayfunc);

		this.testArray = this.testArray.map(function(obj){
			return obj + "_mod";
		});
		this.testArray.forEach(this.logme);

	}

	logme(e,i,a) {
		console.log(e);
	}

	mapfunc(cur) {
		return cur + "_mod";
	}

	arrayfunc(element,index,arr) {
		//element = element+'_mod'; // did not make change in original array
		arr[index] = element+'_mod'; // DID make change in original array
	}

}
