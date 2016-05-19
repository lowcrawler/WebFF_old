import { Component, OnInit }       	from '@angular/core';
import {RouteSegment} from '@angular/router';

@Component ({
	templateUrl: 
		'./app/viewEditEvent.component.html'
})


export class ViewEditEventComponent { //implements OnInit { 

public eventID = "";

 constructor(private params: RouteSegment){
    
  }
  

  ngOnInit() {
	this.eventID = this.params.getParam('eventid');
  }
}