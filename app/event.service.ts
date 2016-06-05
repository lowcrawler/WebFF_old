import { Injectable } from '@angular/core';
import { EVENTS } from './mock-events';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService  {
	// service provides interation between the

	constructor (private _http: Http) {}

  private eventsUrl = 'app/mock-events.json';  // URL to web API that returns JSON array of events

	//private var events;  //todo implement when instantiation and/or pre-fetch?

	 getHTTPEvents() : Observable<Array<any>> { // calls to eventsURL and returns all events in DB in an array of JSON objects
		 //todo this should be any array of <t>events
		return this._http.get(this.eventsUrl)
										.map(this.extractData)
										.catch(this.handleError);
	}


	public getEvents(key:string,value:string) { // returns all events that pass (do not match) the filter. If filter is null, return all events)
	console.log('getEvents('+key+','+value+')');

	//TODO define filter (keep expectations in check, don't over engineer)
	//TODO just making sure people know the key value filtering doesn't yet work
	if(key!=null || value!=null) {
		console.log("Filtering on getEvents() is not yet enabled");
	}

	return this.getAllEvents()
		.then(function(allEvents:Array<{}>) {
			return allEvents;
		})
		.catch(function(err:Error) {
				console.error("ERROR FETCHING EVENT" + err);
				return err;
		});
}


	private getAllEvents():Promise<Array<Object>> { // returns PROMISE that will resolve to all events for internal use/caching
		// TODO - caching
		// TODO - mock/testing  and  live/DB option
		// TODO - fill out from local storage, then hit the DB and update....

		return new Promise(function(resolve, reject) {
			//TODO - grab 'EVENTS' async ... observables? async pipe?
			var returnedEvents = EVENTS;

			if (returnedEvents instanceof Array && returnedEvents.length > 0 ) { //todo, better success test
				resolve(returnedEvents);
			}
			reject(Error("getAllEvents function unable to retrieve events"));
		});
	}


	getEvent(eventID):Promise<Object>  { // returns the FIRST object that has a key that matches the eventID
		return this.getAllEvents().then(function(allEvents:Array<{}>) {
			for(var i=0;i<allEvents.length;i++) {
				var obj = allEvents[i];
				if(obj['eventID']==eventID.toString()) {    //todo -- I think I can directly grab this.  Can be tightened up.
					return obj;
				}
			}
			return undefined;
		}).catch(function(err:Error) {
				console.error("ERROR FETCHING EVENT" + err);
				return err;
			}
		);
	}


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

	private extractData(res: Response) { // if the response came back in 'data' we would extract that with this.
		let body = res.json();
		//return body.data || { };
		return body || { };
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console for now
		// todo better error logging
		return Observable.throw(errMsg);
	}
}
