"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var USGSEvent_class_1 = require('../classes/USGSEvent.class');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/share');
var EventService = (function () {
    // service provides interation between the
    function EventService(_http) {
        this._http = _http;
        this.eventsUrl = 'app/mocks/mock-events.json'; // URL to web API that returns JSON array of events
    }
    //private var events;  //todo implement when instantiation and/or pre-fetch?
    EventService.prototype.getEvents = function (key, value, matchFilter) {
        //TOOD Filter interface as parameters
        // returns all events that pass (match if matchFilter is true, are excluded by filter if matchFilter is false) the filter.
        // If filter values are null, return all events)
        console.log('getEvents(' + key + ',' + value + ',' + matchFilter + ')');
        // unfinished features
        if (matchFilter != null) {
            console.warn("matchFilter in getEvents in event.service not currently implemented.");
        }
        if (key != null && value == null) {
            console.warn("matching based on key existence in getEvents in event.service not currently implemented and may return unexpected values");
        }
        if (key == null && value != null) {
            console.warn("matching based on values without keys in getEvents in event.service not currently implemented and may return unexpected values");
        }
        // actual return values
        // no filter - return all events.
        if (key == null && value == null) {
            return this.getAllEvents()
                .map(function (events) {
                return events.map(function (event) {
                    return new USGSEvent_class_1.USGSEvent(event);
                });
            });
            ;
        }
        // filtering for key/value match
        if (key != null && value != null) {
            return this.getAllEvents()
                .map(function (events) {
                var matches = events.filter(function (event) { return event[key] == value; });
                if (matches.length == 0) {
                    throw 'No matching event found for \'' + key + '\'==\'' + value + '\'';
                }
                else {
                    return matches.map(function (eventData) { return new USGSEvent_class_1.USGSEvent(eventData); });
                }
            })
                .catch(function (e) {
                console.error(e);
                return e;
            });
        }
    };
    EventService.prototype.getAllEvents = function () {
        //TODO - caching
        //TODO - mock/testing  and  live/DB option
        //TODO - fill out from local storage, then hit the DB and update....
        //TODO - gather up all events in LS and return
        // get events from DB,
        //TODO this should be a different observable, not just passed through, of course.
        //TODO need to deal with something if this fails (one way to make fail is to change the eventsUrl)
        return this.getHTTPEvents();
        // TODO - add events from DB that were not in the LS and update
    };
    EventService.prototype.getHTTPEvents = function () {
        //todo this should be any array of <t>events
        return this._http.get(this.eventsUrl)
            .map(function (response) { return response.json()['events']; })
            .catch(this.handleError);
    };
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
    EventService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console for now
        // todo better error logging
        return Observable_1.Observable.throw(errMsg);
    };
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map