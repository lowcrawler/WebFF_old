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
public eventData = "";

 constructor(private params: RouteSegment, private _eventService:EventService){
    
  }
  
  ngOnInit() {
	
	this.eventID = this.params.getParam('eventid');
	this.eventData = this._eventService.getEvent(this.eventID);
	console.log(this.eventData);
  }
}