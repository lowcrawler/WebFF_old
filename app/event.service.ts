import { Injectable } from '@angular/core';
import { EVENTS } from './mock-events';


@Injectable()
export class EventService  {

	//private var events;  //TODO implement when instantiation and/or pre-fetch?


	getEvents() { // returns all events that pass (do not match) the filter. If filter is null, return all events) 
	//TODO define filter (keep expectations in check, don't over engineer)
	console.log('getEventsList');
	console.log(EVENTS);
	//if (events==null) {  
	//	events = getEvents();
	//}
	
	//var parsed = JSON.parse(EVENTS.toString());
	//console.log(parsed);
	var filteredList = this.getAllEvents();
	
	
	return filteredList;  // returns json array of the events filtered as needed
	}
	
	
	
	private getAllEvents() { // returns events for internal use/caching
		//TODO - mock/testing  and  live/DB option
		return EVENTS;
	}
	
	
	
	
	/*
	getEvent(eventID:number)  { //TODO
	return singleEvent;
	}
	
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

	
  
	private singleEvent = {
		"id": "1",
		"name": "FirstEventName",
		"location"}

  
	private allEvents = 
	
	*/
  
}