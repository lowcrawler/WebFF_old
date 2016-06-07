import { Injectable } from '@angular/core';
import { EVENTS } from './mock-events';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class EventService  {
	// service provides interation between the

	constructor (private _http: Http) {}


	//private var events;  //todo implement when instantiation and/or pre-fetch?



	public getEvents(key:string,value:string,matchFilter:boolean) : Observable<Array<any>> {
		//TOOD Filter interface as parameters
		// returns all events that pass (match if matchFilter is true, are excluded by filter if matchFilter is false) the filter.
		// If filter values are null, return all events)
	console.log('getEvents('+key+','+value+','+matchFilter+')');

	if(matchFilter!=null) {
		console.log("matchFilter in getEvents in event.service not currently used.");
		//TODO: build matchFilter into plan
	}

	return this.getAllEvents()
	 .map(events => {
		 var matches = events.filter(event => event[key] == value);
		 if (matches.length == 0) {
		   throw 'no matching event found';
		 } else {
		   return matches[0];
		 }
	 })
	 .catch(e => {
	   console.log(e);
	   return e;
	 });

// 	allEventsObserver.subscribe(
// 		events => {
// 			for(var i=0;i<events.length;i++) {
// 				if(events[i][key]==value) {
// 					console.log('allEventsObserver.subscribe: MATCH!!!' + events[i][key]);
// 					var newObs = Observable.create(function (observer) {
// 						observer.next(events[i]);
// 						observer.complete(events[i]);
// 					});
// 				}
// 			}
// 			return allEventsObserver;
//
// 		},
// 		error =>  console.error("Error retriving all events for filtering: " + error));;
//
// return allEventsObserver;
}


	private getAllEvents(): Observable<Array<any>> {  //todo this should be any array of <t>events
		// TODO - caching
		// TODO - mock/testing  and  live/DB option
		// TODO - fill out from local storage, then hit the DB and update....

		// TODO - gather up all events in LS and return

		// get events from DB,
		//TODO this should be a different observable, not just passed through, of course.
		return this.getHTTPEvents();

		 // TODO - add events from DB that were not in the LS and update


	}

	private eventsUrl = 'app/mock-events.json';  // URL to web API that returns JSON array of events
	getHTTPEvents() : Observable<Array<any>> { // calls to eventsURL and returns all users events in DB in an array of JSON objects
		 //todo this should be any array of <t>events
		return this._http.get(this.eventsUrl)
										.map(response => response.json()['events'])
										.catch(this.handleError);
	}


// likely remove entire thing and use filtered above
	// getEvent(eventID):Promise<Object>  { // returns the FIRST object that has a key that matches the eventID
	// 	return this.getAllEvents().then(function(allEvents:Array<{}>) {
	// 		for(var i=0;i<allEvents.length;i++) {
	// 			var obj = allEvents[i];
	// 			if(obj['eventID']==eventID.toString()) {    //todo -- I think I can directly grab this.  Can be tightened up.
	// 				return obj;
	// 			}
	// 		}
	// 		return undefined;
	// 	}).catch(function(err:Error) {
	// 			console.error("ERROR FETCHING EVENT" + err);
	// 			return err;
	// 		}
	// 	);
	// }


	/*
	saveEvent(event:string, overwrite:boolean) { // recieves JSON version of event, saves it (overwriting?)
	//TODO
	return null;
	}

	getEventFromXML(XML:string) {
	//TODO
	// convert XML to JSON
	// Add to list (via Save) and then use get Event ID?
	return null;
	}

*/


	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console for now
		// todo better error logging
		return Observable.throw(errMsg);
	}
}
