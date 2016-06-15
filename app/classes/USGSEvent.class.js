"use strict";
var utilities_1 = require('../utilities');
var USGSEvent = (function () {
    function USGSEvent(_eventData, _eventID) {
        //TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
        if (_eventID == null) {
            _eventID = utilities_1.Utilities.newGuidPlus();
        }
        this.eventID = _eventID;
        this.eventData = _eventData;
    }
    USGSEvent.prototype.setEventData = function (eventData) {
        //TODO - check if eventID is in the eventINFO and ensure it matches if it is
        this.eventData = eventData;
        //TODO = save to LS and DB -- maybe the 'saving' is done separately?
        return true;
    };
    //todo -- addEventData ?  (for when filling out the forms, we can just add rather than completely rebuild?)
    USGSEvent.prototype.getEventData = function () {
        // TODO: incoporate eventID?
        return this.eventData;
    };
    USGSEvent.prototype.getEventID = function () {
        return this.eventID;
    };
    return USGSEvent;
}());
exports.USGSEvent = USGSEvent;
//# sourceMappingURL=USGSEvent.class.js.map