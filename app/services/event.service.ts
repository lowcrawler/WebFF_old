import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { USGSEvent } from '../classes/USGSEvent.class';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class EventService  {
	// service provides interation between the

	constructor (private _http: Http) {}


	//private var events;  //todo implement when instantiation and/or pre-fetch?



	public getEvents(key:string,value:string) : Observable<Array<USGSEvent>> {
		//TOOD Filter interface as parameters
		// returns all events that pass (match if matchFilter is true, are excluded by filter if matchFilter is false) the filter.
		// If filter values are null, return all events)
	console.log('getEvents('+key+','+value+')');

// unfinished features
	if(key!=null && value==null) { //todo
		console.warn("matching based on key existence in getEvents in event.service not currently implemented and may return unexpected values");
	}
	if(key==null && value!=null) { //todo
		console.warn("matching based on values without keys in getEvents in event.service not currently implemented and may return unexpected values");
	}

// actual return values
// no filter - return all events.
	if(key==null && value==null) {
		return this.getAllEvents();
	}

// filtering for key/value match
if(key!=null&&value!=null) {
	return this.getAllEvents()
	 .map(events => {
		 var matches = events.filter(event => event.getEventData()[key] == value);
		 if (matches.length == 0) {
		   throw 'No matching event found for \''+key+'\'==\''+value+'\'';
		 } else {
		   return matches;
		 }
	 })
	 .catch(e => {
	   	console.error(e);
	   	return e;
	 });
 }

}


	 getAllEvents(): Observable<Array<USGSEvent>> {  // pulls all events from DB and LS, converts to event objects and returns and observable
		//todo - should be private
		//TODO - caching
		//TODO - mock/testing  and  live/DB option
		//TODO - fill out from local storage, then hit the DB and update....

		//TODO - gather up all events in LS and return

		// get events from DB,
		//TODO need to deal with something if this fails (one way to make fail is to change the eventsUrl)
			return this.getHTTPEvents()
			.map(events =>
				events.map(eventJSON =>
					new USGSEvent(eventJSON)
				)
			);


		 // TODO - add events from DB that were not in the LS and update


	}

	private eventsUrl = 'app/mocks/mock-events.json';  // URL to web API that returns JSON array of events

	 getHTTPEvents() : Observable<Array<any>> { // calls to eventsURL and returns all users events in DB in an array of JSON objects
		 // todo this should be private
		return this._http.get(this.eventsUrl)
										.map(response => response.json()['events'])
										.catch(this.handleError);
	}


	/*
	public saveEvent(event:string) { // recieves JSON version of event and attempts to save to LS and DB; returns observable status
	//TODO
	return null;
	}

	private saveEventToLS(event:string) { //recieves JSON version of event, saves it to the LS; returns observable status;
	//TODO
	return null;
	}

	private saveEventToDB(event:string) { //recieves JSON version of event, saves it to the DB; returns observable status;
	//TODO
	return null;
	}

	public getEventFromXML(XML:string) {
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
