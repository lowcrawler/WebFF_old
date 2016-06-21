"use strict";
var USGSQuestion_class_1 = require('./USGSQuestion.class');
describe('USGSQuestion class tests', function () {
    var numberQJSON = {
        "required": true,
        "label": "Station ID",
        "xmlName": "stationID",
        "type": "Number",
        "bounds_lower": 99999,
        "bounds_upper": 999999
    };
    var textQJSON = {
        "required": true,
        "label": "Station Name",
        "xmlName": "stationName",
        "type": "Text",
        "maxLength": 15
    };
    var textfieldQJSON;
    var dateQJSON = {
        "required": true,
        "label": "Date",
        "xmlName": "eventDefaultDate",
        "type": "Date"
    };
    var dropDownQJSON = {
        "required": true,
        "label": "Collected Via",
        "xmlName": "collectedVia",
        "type": "DropDown",
        "dropDownOptions": {
            "option1": "Wading",
            "option2": "Cable",
            "option3": "Ice",
            "option4": "Boat",
            "option5": "Bridge",
            "Default": "Select...",
            "DefaultOK": false
        }
    };
    var checkboxQJSON = {
        "required": false,
        "label": "Test Method",
        "xmlName": "weatherTestMethod",
        "type": "checkbox",
        "checkboxOptions": {
            "option1": "Finger",
            "option2": "Mecury Thermometer",
            "option3": "Iphone",
            "option4": "NWS site",
            "multiAllowed": true //TODO test -multiAllowed=false
        }
    };
    var timeQJSON = {
        "required": false,
        "label": "What time is it?",
        "xmlName": "time",
        "type": "time",
        "bounds_earliest": "600",
        "bounds_latest": "1000"
    };
    // must test "defaulValue" for all
    // must test "defaultValueOK" for all
    // must test secondary questions
    describe('USGSQuestion constructor tests', function () {
        it("New USGSQuestion object returns correct 'xmlName'", function () {
            var str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            var q = new USGSQuestion_class_1.USGSQuestion(jsn);
            expect(q.getXMLName()).toEqual('stationID');
        });
        it("New USGSQuestion object returns correct 'label'", function () {
            var str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            var q = new USGSQuestion_class_1.USGSQuestion(jsn);
            expect(q.getLabel()).toEqual('Station ID');
        });
        it("New USGSQuestion object returns correct 'type'", function () {
            var str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            var q = new USGSQuestion_class_1.USGSQuestion(jsn);
            console.log(q.getType());
            expect(q.getType()).toEqual('Number');
        });
        it("New USGSQuestion object correct returns 'required' value", function () {
            var str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            var q = new USGSQuestion_class_1.USGSQuestion(jsn);
            expect(q.isRequired()).toEqual(true);
        });
        it("Constructor throws error when given JSON missing label key", function () {
            var missingLabelKeyJSON = JSON.parse(JSON.stringify(numberQJSON));
            delete missingLabelKeyJSON['label'];
            var str = JSON.stringify(missingLabelKeyJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            expect(function () { return new USGSQuestion_class_1.USGSQuestion(jsn); }).toThrow(new Error("USGSQuestion spec was missing 'label' key"));
        });
        it("Constructor throws error when given JSON missing xmlName value", function () {
            var blankLabelJSON = JSON.parse(JSON.stringify(numberQJSON));
            blankLabelJSON['xmlName'] = "";
            var str = JSON.stringify(blankLabelJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            expect(function () { return new USGSQuestion_class_1.USGSQuestion(jsn); }).toThrow(new Error("USGSQuestion spec was missing 'xmlName' value"));
        });
        it("Constructor throws error when given JSON with null required value", function () {
            var nullValuelJSON = JSON.parse(JSON.stringify(numberQJSON));
            nullValuelJSON['required'] = null;
            var str = JSON.stringify(nullValuelJSON); //todo - this can't be the best way to do this....
            var jsn = JSON.parse(str);
            expect(function () { return new USGSQuestion_class_1.USGSQuestion(jsn); }).toThrow(new Error("USGSQuestion spec was missing 'required' value"));
        });
    }); // end constructor tests
    // });
    //
    // it("Set Event Data changes data", () => {
    // 	let newJSON : JSON = JSON.parse('{"one":"fish","red":"blue"}');
    // 	evt.setEventData(newJSON);
    // 	expect(evt.getEventData()).toEqual(newJSON);
    // });
});
//# sourceMappingURL=USGSQuestion.class.spec.js.map