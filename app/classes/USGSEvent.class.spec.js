"use strict";
var USGSEvent_class_1 = require('./USGSEvent.class');
describe('USGSEvent tests', function () {
    var data = '{"foo":"bar", "moo":"bah"}';
    var mockJSON = JSON.parse(data);
    var evtID = "123456";
    var evt = new USGSEvent_class_1.USGSEvent(mockJSON, evtID);
    describe('USGSEvent constructor tests', function () {
        it('New USGSEvent object has passed eventID', function () {
            expect(evt.getEventID()).toEqual(evtID);
        });
        it('New USGSEvent object has generated eventID', function () {
            var evt = new USGSEvent_class_1.USGSEvent(mockJSON);
            expect(evt.getEventID().length).toEqual(50);
            expect(evt.getEventID().charAt(14)).toEqual('4');
        });
        it('New USGSEvent object returns JSON data', function () {
            expect(evt.getEventData()).toEqual(mockJSON);
        });
    });
    it("Set Event Data changes data", function () {
        var newJSON = JSON.parse('{"one":"fish","red":"blue"}');
        evt.setEventData(newJSON);
        expect(evt.getEventData()).toEqual(newJSON);
    });
});
//# sourceMappingURL=USGSEvent.class.spec.js.map