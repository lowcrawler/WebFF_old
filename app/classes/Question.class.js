"use strict";
var Question = (function () {
    // private requiredParametersArray: Array<string> = ['label','xmlName','required','type'];
    //todo - pull commons from file or structure so constructor can be cleaner?
    //todo - add styles to label?
    function Question(questionSpec) {
        //TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
        // console.log("constructor(): ");
        // console.log(questionSpec);
        // items common to all questions:
        this.generalInfo = {
            "label": "",
            "xmlName": "",
            "required": false,
            "type": ""
        };
        // verify the questionSpec has the required general info and, if so assign to the generalInfo object.  If not, throw an error.
        for (var key in this.generalInfo) {
            if (this.generalInfo.hasOwnProperty(key)) {
                if (!questionSpec.hasOwnProperty(key)) {
                    throw new Error("Question spec was missing \'" + key + "\' key");
                }
                if (questionSpec[key] == "" || questionSpec[key] == null) {
                    throw new Error("Question spec was missing \'" + key + "\' value");
                }
                this.generalInfo[key] = questionSpec[key];
            }
        }
        //todo subclasses, etc.
    }
    Question.prototype.getLabel = function () {
        return this.generalInfo.label;
    };
    Question.prototype.getXMLName = function () {
        return this.generalInfo.xmlName;
    };
    Question.prototype.isRequired = function () {
        return this.generalInfo.required;
    };
    Question.prototype.getType = function () {
        return this.generalInfo.type; //todo (sub-types classes and objects)
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.class.js.map