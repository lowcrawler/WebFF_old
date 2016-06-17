"use strict";
var Question = (function () {
    //todo - pull commons from file or structure so constructor can be cleaner?
    //todo - add styles to label?
    function Question(questionSpec) {
        this.requiredParametersArray = ['label', 'xmlName', 'required', 'type'];
        //TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
        console.log("constructor(): ");
        console.log(questionSpec);
        // verify the JSON data
        this.requiredParametersArray.forEach(function (para) {
            if (!questionSpec.hasOwnProperty(para)) {
                console.log("missing key");
                throw new Error("Question spec was missing \'" + para + "\' key");
            }
            if (questionSpec[para] == "" || questionSpec[para] == null) {
                console.log('missing value');
                throw new Error("Question spec was missing \'" + para + "\' value");
            }
        });
        this.label = questionSpec['label'];
    }
    Question.prototype.getLabel = function () {
        return this.label;
    };
    Question.prototype.getXMLName = function () {
        return this.xmlName;
    };
    Question.prototype.isRequired = function () {
        return this.required;
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.class.js.map