import {Utilities} from './utilities';

export class USGSEvent {
	eventData:JSON;
	//todo - split out JSON into actual values and perhaps sub-class this for sediment, surface, groundwater, etc...
	eventID:string;

	constructor(_eventData:JSON, _eventID?:string) {
		//TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
		if(_eventID==null) {
			_eventID=Utilities.newGuidPlus();
		}
		this.eventID = _eventID;
		this.eventData = _eventData;
	}

	setEventData(eventData:JSON) { // sets FULL event, overwritting old event
		//TODO - check if eventID is in the eventINFO and ensure it matches if it is
		this.eventData = eventData;
		//TODO = save to LS and DB -- maybe the 'saving' is done separately?
		return true;
	}

	//todo -- addEventData ?  (for when filling out the forms, we can just add rather than completely rebuild?)

	getEventData():JSON { // returns the full event
		// TODO: incoporate eventID?
		return this.eventData;
	}

	getEventID():string {
		return this.eventID;
	}
}
